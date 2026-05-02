import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  projectType?: string;
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  location?: string;
  coverageNeeded?: string;
  estimatedBudget?: string;
  message?: string;
  organization?: string;
  businessName?: string;
  companyWebsite?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const failureMessage =
  "We could not send your inquiry right now. Please email brandonmediagroupllc@gmail.com directly.";
const validationMessage = "Please complete your contact information and message.";
const successMessage = "Thank you. We will review your inquiry and follow up shortly.";
const rateLimitMessage = "Too many requests. Please try again later.";
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxSubmissions = 3;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: validationMessage }, { status: 400 });
  }

  if (stringValue(payload, "companyWebsite")) {
    return NextResponse.json({ message: successMessage });
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json({ message: rateLimitMessage }, { status: 429 });
  }

  const projectType = payload.projectType?.trim() || "Website Inquiry";
  const name = payload.name?.trim();
  const organization = stringValue(payload, "organization");
  const businessName = stringValue(payload, "businessName");
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const weddingDate = payload.weddingDate?.trim();
  const location = payload.location?.trim();
  const coverageNeeded = payload.coverageNeeded?.trim() || "Not Sure Yet";
  const estimatedBudget = payload.estimatedBudget?.trim() || "Not provided";
  const message = payload.message?.trim();

  const contactName = name || organization || businessName;

  if (
    !contactName ||
    !email ||
    !emailPattern.test(email) ||
    !message ||
    message.length > 2000 ||
    (phone && phone.length > 30) ||
    (location && location.length > 150)
  ) {
    return NextResponse.json({ message: validationMessage }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    if (!apiKey) console.error("Missing environment variable: RESEND_API_KEY");
    if (!from) console.error("Missing environment variable: CONTACT_FROM_EMAIL");
    if (!to) console.error("Missing environment variable: CONTACT_TO_EMAIL");
    return NextResponse.json({ message: failureMessage }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const emailPayload = {
      from,
      to,
      replyTo: email,
      subject: `${projectType} inquiry from ${contactName}`,
      text: formatTextPayload(payload),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111">
          <h1>New ${escapeHtml(projectType)} inquiry</h1>
          ${formatHtmlPayload(payload)}
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    } as unknown as Parameters<typeof resend.emails.send>[0];

    await resend.emails.send(emailPayload);

    return NextResponse.json({
      message: successMessage
    });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ message: failureMessage }, { status: 502 });
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();

  return forwardedFor || realIp || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return { allowed: true };
  }

  if (current.count >= rateLimitMaxSubmissions) {
    return { allowed: false };
  }

  current.count += 1;
  return { allowed: true };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stringValue(payload: ContactPayload, key: string) {
  const value = (payload as Record<string, unknown>)[key];
  return typeof value === "string" ? value.trim() : "";
}

function formatLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function entries(payload: ContactPayload) {
  return Object.entries(payload)
    .filter(
      ([key, value]) =>
        key !== "message" &&
        key !== "companyWebsite" &&
        typeof value === "string" &&
        value.trim()
    )
    .map(([key, value]) => [formatLabel(key), String(value).trim()] as const);
}

function formatTextPayload(payload: ContactPayload) {
  const detailLines = entries(payload).map(([key, value]) => `${key}: ${value}`);
  return [...detailLines, "", payload.message?.trim() ?? ""].join("\n");
}

function formatHtmlPayload(payload: ContactPayload) {
  return entries(payload)
    .map(
      ([key, value]) =>
        `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</p>`
    )
    .join("");
}
