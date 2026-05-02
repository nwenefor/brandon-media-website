"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [projectType, setProjectType] = useState("Wedding");

  const serviceLinks: Record<string, string> = {
    "Corporate Event": "/corporate-events#inquiry",
    "Real Estate": "/real-estate-media#inquiry",
    "Business Promo": "/business-promo-videos#inquiry"
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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
    setMessage(data.message ?? "Thanks. I will be in touch soon.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        type="text"
        name="companyWebsite"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <label className="grid gap-2 text-sm text-ivory/72">
        Project Type
        <select
          name="projectType"
          value={projectType}
          onChange={(event) => setProjectType(event.target.value)}
          className="h-12 border border-white/12 bg-ink px-4 text-base text-ivory outline-none transition focus:border-gold"
        >
          <option>Wedding</option>
          <option>Corporate Event</option>
          <option>Real Estate</option>
          <option>Business Promo</option>
          <option>Other</option>
        </select>
      </label>
      {serviceLinks[projectType] ? (
        <a
          href={serviceLinks[projectType]}
          className="border border-gold/40 px-4 py-3 text-sm leading-6 text-ivory/76 transition hover:border-gold hover:text-white"
        >
          For a more tailored inquiry, continue to the {projectType} page.
        </a>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-ivory/72">
          Full Name
          <input
            required
            name="name"
            className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
            placeholder="Full name"
          />
        </label>
        <label className="grid gap-2 text-sm text-ivory/72">
          Email
          <input
            required
            type="email"
            name="email"
            className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-ivory/72">
          Phone Number
          <input
            required
            type="tel"
            name="phone"
            className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
            placeholder="540-214-7725"
          />
        </label>
        <label className="grid gap-2 text-sm text-ivory/72">
          Wedding Date
          <input
            required
            type="date"
            name="weddingDate"
            className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-ivory/72">
        Wedding Location / Venue
        <input
          required
          name="location"
          className="h-12 border border-white/12 bg-white/[0.04] px-4 text-base text-ivory outline-none transition focus:border-gold"
          placeholder="Venue or city"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-ivory/72">
          Coverage Needed
          <select
            name="coverageNeeded"
            className="h-12 border border-white/12 bg-ink px-4 text-base text-ivory outline-none transition focus:border-gold"
            defaultValue="Photo + Video"
          >
            <option>Photo + Video</option>
            <option>Photography Only</option>
            <option>Video Only</option>
            <option>Not Sure Yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-ivory/72">
          Estimated Budget
          <select
            name="estimatedBudget"
            className="h-12 border border-white/12 bg-ink px-4 text-base text-ivory outline-none transition focus:border-gold"
            defaultValue="$1,500–$2,600"
          >
            <option>Under $1,000</option>
            <option>$1,000–$1,500</option>
            <option>$1,500–$2,600</option>
            <option>$2,600+</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm text-ivory/72">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none border border-white/12 bg-white/[0.04] px-4 py-3 text-base text-ivory outline-none transition focus:border-gold"
          placeholder="Tell us about your wedding and what matters most to you."
        />
      </label>
      <button
        disabled={state === "sending"}
        className="btn-primary h-12 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? "Checking" : "Check Availability"}
      </button>
      {message ? (
        <p
          className={`text-sm ${
            state === "error" ? "text-red-300" : "text-gold"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
