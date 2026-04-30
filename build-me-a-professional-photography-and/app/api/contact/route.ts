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
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
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

  if (!contactName || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please complete your contact information and message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "brandonmediagroupllc@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Brandon Media Group <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "We could not send your inquiry right now. Please email brandonmediagroupllc@gmail.com directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `${projectType} inquiry from ${contactName}`,
      text: formatTextPayload(payload),
      html: `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111">
          <h1>New ${escapeHtml(projectType)} inquiry</h1>
          ${formatHtmlPayload(payload)}
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    });

    return NextResponse.json({
      message: "Thank you. We will review your date and follow up shortly."
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "We could not send your inquiry right now. Please email brandonmediagroupllc@gmail.com directly." },
      { status: 502 }
    );
  }
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
    .filter(([key, value]) => key !== "message" && typeof value === "string" && value.trim())
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
