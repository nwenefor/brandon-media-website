"use client";

import { FormEvent, useState } from "react";

export type Field =
  | { type: "text" | "email" | "tel" | "date"; name: string; label: string; placeholder?: string; required?: boolean }
  | { type: "select"; name: string; label: string; options: readonly string[]; required?: boolean }
  | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean };

type ServiceInquiryFormProps = {
  projectType: string;
  fields: readonly Field[];
  submitLabel: string;
};

type FormState = "idle" | "sending" | "sent" | "error";

export function ServiceInquiryForm({
  projectType,
  fields,
  submitLabel
}: ServiceInquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const payload = {
      projectType,
      ...Object.fromEntries(new FormData(form).entries())
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setState("error");
      setMessage(data.message ?? "Something went wrong. Please try again.");
      return;
    }

    form.reset();
    setState("sent");
    setMessage(data.message ?? "Thank you. We will follow up shortly.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="projectType" value={projectType} />
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm text-ivory/72">
          {field.label}
          {field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="h-12 border border-white/12 bg-ink px-4 text-base text-ivory outline-none transition focus:border-gold"
              defaultValue={field.options[0]}
            >
              {field.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={5}
              className="resize-none border border-white/12 bg-white/[0.04] px-4 py-3 text-base text-ivory outline-none transition focus:border-gold"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
              placeholder={field.placeholder}
            />
          )}
        </label>
      ))}
      <button
        disabled={state === "sending"}
        className="btn-primary h-12 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? "Sending" : submitLabel}
      </button>
      {message ? (
        <p className={`text-sm ${state === "error" ? "text-red-300" : "text-gold"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
