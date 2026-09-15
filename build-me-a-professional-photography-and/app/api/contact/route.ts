import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  projectType?: string;
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  location?: string;
  coverageNeeded?: string;
  estimatedBudget?: string;
  interestedIn?: string;
  message?: string;
  organization?: string;
  businessName?: string;
  companyWebsite?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const failureMessage =
  "We could not send your inquiry right now. Please email brandonmediagroupllc@gmail.com directly.";
const validationMessage = "Please complete the required contact and project details.";
const successMessage = "Thank you. We will review your inquiry and follow up shortly.";
const rateLimitMessage = "Too many requests. Please try again later.";
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxSubmissions = 3;
const maxPayloadBytes = 24 * 1024;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

const fieldLimits = {
  projectType: 100,
  name: 120,
  email: 254,
  phone: 30,
  weddingDate: 40,
  location: 150,
  coverageNeeded: 100,
  estimatedBudget: 80,
  interestedIn: 80,
  message: 2000,
  organization: 150,
  businessName: 150,
  companyWebsite: 200
} satisfies Record<keyof ContactPayload, number>;

export async function POST(request: Request) {
  const payload = await readPayload(request);

  if (!payload) {
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

  if (hasInvalidFieldLength(payload)) {
    return NextResponse.json({ message: validationMessage }, { status: 400 });
  }

  const projectType = cleanHeaderValue(payload.projectType) || "Website Inquiry";
  const name = cleanHeaderValue(payload.name);
  const organization = cleanHeaderValue(payload.organization);
  const businessName = cleanHeaderValue(payload.businessName);
  const email = cleanHeaderValue(payload.email);
  const phone = stringValue(payload, "phone");
  const weddingDate = cleanHeaderValue(payload.weddingDate);
  const location = stringValue(payload, "location");
  const coverageNeeded = stringValue(payload, "coverageNeeded") || "Not Sure Yet";
  const estimatedBudget = stringValue(payload, "estimatedBudget") || "Not provided";
  const message = stringValue(payload, "message");
  const contactName = name || organization || businessName;

  if (
    !contactName ||
    !email ||
    !emailPattern.test(email) ||
    hasHeaderBreak(payload.email) ||
    hasHeaderBreak(payload.name) ||
    hasHeaderBreak(payload.projectType)
  ) {
    return NextResponse.json({ message: validationMessage }, { status: 400 });
  }

  const smtp = getSmtpConfig();

  if (!smtp) {
    console.error("Zoho SMTP contact delivery is not configured.");
    return NextResponse.json({ message: failureMessage }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user: smtp.user,
      pass: smtp.password
    }
  });

  const normalizedPayload: ContactPayload = {
    ...payload,
    projectType,
    name: name || undefined,
    email,
    phone,
    weddingDate,
    location,
    coverageNeeded,
    estimatedBudget,
    message
  };

  try {
    const info = await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: email,
      subject: buildSubject(projectType, contactName, weddingDate),
      text: formatTextPayload(normalizedPayload),
      html: formatHtmlEmail(projectType, contactName, normalizedPayload)
    });

    if (!Array.isArray(info.accepted) || info.accepted.length === 0) {
      console.error("Zoho SMTP did not accept the contact message.");
      return NextResponse.json({ message: failureMessage }, { status: 502 });
    }

    return NextResponse.json({ message: successMessage });
  } catch (error) {
    console.error("Zoho SMTP contact delivery failed.", safeMailError(error));
    return NextResponse.json({ message: failureMessage }, { status: 502 });
  }
}

async function readPayload(request: Request): Promise<ContactPayload | null> {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > maxPayloadBytes) return null;

  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maxPayloadBytes) return null;

    const parsed = JSON.parse(body) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;

    return parsed as ContactPayload;
  } catch {
    return null;
  }
}

function getSmtpConfig() {
  const host = process.env.ZOHO_SMTP_HOST?.trim();
  const port = Number(process.env.ZOHO_SMTP_PORT);
  const secureValue = process.env.ZOHO_SMTP_SECURE?.trim().toLowerCase();
  const user = process.env.ZOHO_SMTP_USER?.trim();
  const password = process.env.ZOHO_SMTP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (
    !host ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    (secureValue !== "true" && secureValue !== "false") ||
    (port === 465 && secureValue !== "true") ||
    !user ||
    !password ||
    !to ||
    !from ||
    hasHeaderBreak(to) ||
    hasHeaderBreak(from)
  ) {
    return null;
  }

  return {
    host,
    port,
    secure: secureValue === "true",
    user,
    password,
    to,
    from
  };
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

  if (current.count >= rateLimitMaxSubmissions) return { allowed: false };

  current.count += 1;
  return { allowed: true };
}

function hasInvalidFieldLength(payload: ContactPayload) {
  return Object.entries(fieldLimits).some(([key, max]) => {
    const value = (payload as Record<string, unknown>)[key];
    return value !== undefined && (typeof value !== "string" || value.length > max);
  });
}

function hasHeaderBreak(value?: string) {
  return typeof value === "string" && /[\r\n]/.test(value);
}

function cleanHeaderValue(value?: string) {
  return typeof value === "string" ? value.trim().replace(/[\r\n]+/g, " ") : "";
}

function stringValue(payload: ContactPayload, key: keyof ContactPayload) {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
        key !== "companyWebsite" &&
        typeof value === "string" &&
        value.trim()
    )
    .map(([key, value]) => [formatLabel(key), String(value).trim()] as const);
}

function buildSubject(projectType: string, contactName: string, weddingDate: string) {
  const safeName = cleanHeaderValue(contactName);
  const safeDate = cleanHeaderValue(weddingDate);

  if (projectType.toLowerCase().includes("wedding")) {
    return `Wedding inquiry — ${safeName}${safeDate ? ` — ${safeDate}` : ""}`;
  }

  return `${cleanHeaderValue(projectType)} inquiry — ${safeName}`;
}

function formatTextPayload(payload: ContactPayload) {
  return entries(payload)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

function formatHtmlEmail(projectType: string, contactName: string, payload: ContactPayload) {
  const rows = entries(payload)
    .map(
      ([key, value]) => `
        <tr>
          <th style="padding:10px 14px;text-align:left;vertical-align:top;border-bottom:1px solid #e7e2d8;color:#6f5527;font-size:12px;text-transform:uppercase;letter-spacing:.08em;">${escapeHtml(key)}</th>
          <td style="padding:10px 14px;border-bottom:1px solid #e7e2d8;color:#171717;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;background:#f5f1e8;color:#171717;font-family:Arial,sans-serif;">
        <div style="max-width:680px;margin:0 auto;padding:32px 18px;">
          <div style="background:#ffffff;border:1px solid #e1dbcf;padding:28px;">
            <p style="margin:0;color:#8c713e;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;">Brandon Media Group</p>
            <h1 style="margin:12px 0 8px;font-family:Georgia,serif;font-size:30px;font-weight:400;">New ${escapeHtml(projectType)} inquiry</h1>
            <p style="margin:0 0 22px;color:#555;">Submitted by ${escapeHtml(contactName)} through the website inquiry form.</p>
            <table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #e7e2d8;font-size:14px;">${rows}</table>
          </div>
        </div>
      </body>
    </html>`;
}

function safeMailError(error: unknown) {
  if (!error || typeof error !== "object") return { code: "UNKNOWN" };

  const candidate = error as { code?: unknown; responseCode?: unknown; command?: unknown };
  return {
    code: typeof candidate.code === "string" ? candidate.code : "UNKNOWN",
    responseCode: typeof candidate.responseCode === "number" ? candidate.responseCode : undefined,
    command: typeof candidate.command === "string" ? candidate.command : undefined
  };
}
