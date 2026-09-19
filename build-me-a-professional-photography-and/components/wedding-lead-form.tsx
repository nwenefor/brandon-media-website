"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TrackedPrivacyLink } from "@/components/tracked-privacy-link";
import { PixiesetGalleryLink } from "@/components/pixieset-gallery-link";
import { trackGoogleAdsLeadConversion, trackWeddingEvent } from "@/lib/analytics";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  interestedIn: string;
  coverageNeeded: string;
  estimatedBudget: string;
  message: string;
  companyWebsite: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  weddingDate: "",
  location: "",
  interestedIn: "",
  coverageNeeded: "",
  estimatedBudget: "",
  message: "",
  companyWebsite: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const interestOptions = ["Photography", "Videography", "Both"] as const;
const coverageOptions = ["4–6 hours", "6–8 hours", "8–10 hours", "10+ hours"] as const;
const budgetOptions = ["$1,500–$2,000", "$2,000–$2,600", "$2,600–$4,000", "$4,000+"] as const;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a valid phone number.";
  if (!values.weddingDate) errors.weddingDate = "Choose your wedding date.";
  if (values.location.trim().length < 2) errors.location = "Enter your venue or city.";
  if (!values.interestedIn) errors.interestedIn = "Select the service you need.";
  if (!values.coverageNeeded) errors.coverageNeeded = "Select an approximate coverage length.";
  if (!values.estimatedBudget) errors.estimatedBudget = "Select an approximate budget.";
  if (values.message.length > 2000) errors.message = "Keep your message under 2,000 characters.";

  return errors;
}

export function WeddingLeadForm() {
  const consultationUrl = process.env.NEXT_PUBLIC_CONSULTATION_URL;
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const started = useRef(false);
  const submissionInFlight = useRef(false);
  const googleAdsConversionSent = useRef(false);
  const errorSummary = useRef<HTMLDivElement>(null);

  function noteFormStart() {
    if (started.current) return;
    started.current = true;
    trackWeddingEvent("form_start", { form_name: "wedding_date_inquiry" });
  }

  function updateValue(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (state === "error") {
      setState("idle");
      setServerMessage("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInFlight.current || state === "submitting" || state === "success") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      setServerMessage("Please review the highlighted fields.");
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }

    submissionInFlight.current = true;
    setState("submitting");
    setServerMessage("");
    trackWeddingEvent("form_submit", {
      form_name: "wedding_date_inquiry",
      interested_in: values.interestedIn,
      coverage: values.coverageNeeded
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType: "Wedding Videography Landing Page",
          ...values
        })
      });
      const data = (await response.json()) as { message?: string; submitted?: boolean };

      if (!response.ok) throw new Error(data.message || "We could not send your inquiry.");

      setState("success");
      trackWeddingEvent("form_success", {
        form_name: "wedding_date_inquiry",
        conversion_type: "wedding_lead"
      });
      if (data.submitted === true && !googleAdsConversionSent.current) {
        googleAdsConversionSent.current = true;
        trackGoogleAdsLeadConversion();
      }
    } catch (error) {
      submissionInFlight.current = false;
      setState("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "We could not send your inquiry. Your details are still here—please try again."
      );
      requestAnimationFrame(() => errorSummary.current?.focus());
    }
  }

  if (state === "success") {
    return (
      <div className="border border-gold/40 bg-gold/[0.08] p-6 sm:p-8" role="status" aria-live="polite">
        <CheckCircle2 className="h-9 w-9 text-gold" aria-hidden="true" />
        <h3 className="mt-5 font-serif text-3xl text-white">Thanks — we’re checking your date.</h3>
        <p className="mt-4 max-w-xl leading-7 text-ivory/72">
          Your inquiry was received. While we review it, explore recent wedding work and the collection
          comparison below. Wedding collections begin at $1,500.
        </p>
        <PixiesetGalleryLink location="form_success" className="btn-primary mt-7 w-full sm:w-auto">
          View More Wedding Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </PixiesetGalleryLink>
        {consultationUrl?.startsWith("https://") ? (
          <a
            href={consultationUrl}
            className="btn-secondary mt-3 w-full sm:ml-3 sm:w-auto"
            onClick={() => trackWeddingEvent("consultation_click", { placement: "form_success" })}
          >
            Book a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
        {/* TODO: Configure NEXT_PUBLIC_CONSULTATION_URL to display the consultation CTA. */}
      </div>
    );
  }

  const inputClass =
    "min-h-[3.25rem] w-full rounded-none border border-white/15 bg-white/[0.045] px-4 text-base text-white outline-none transition placeholder:text-ivory/35 focus:border-gold";

  return (
    <form onSubmit={onSubmit} onFocusCapture={noteFormStart} noValidate className="grid gap-5">
      <div
        ref={errorSummary}
        tabIndex={-1}
        role={state === "error" ? "alert" : undefined}
        className={state === "error" ? "border border-red-300/40 bg-red-300/10 px-4 py-3 text-sm text-red-100" : "sr-only"}
      >
        {serverMessage}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full name" name="name" value={values.name} error={errors.name} autoComplete="name" onChange={updateValue} />
        <TextField label="Email" name="email" type="email" value={values.email} error={errors.email} autoComplete="email" inputMode="email" onChange={updateValue} />
        <TextField label="Phone" name="phone" type="tel" value={values.phone} error={errors.phone} autoComplete="tel" inputMode="tel" onChange={updateValue} />
        <TextField label="Wedding date" name="weddingDate" type="date" value={values.weddingDate} error={errors.weddingDate} onChange={updateValue} />
      </div>

      <TextField label="Venue or city" name="location" value={values.location} error={errors.location} autoComplete="street-address" placeholder="Venue name or city" onChange={updateValue} />

      <div className="grid gap-5 sm:grid-cols-3">
        <SelectField label="Interested in" name="interestedIn" value={values.interestedIn} options={interestOptions} error={errors.interestedIn} onChange={updateValue} />
        <SelectField label="Approximate coverage" name="coverageNeeded" value={values.coverageNeeded} options={coverageOptions} error={errors.coverageNeeded} onChange={updateValue} />
        <SelectField label="Budget range" name="estimatedBudget" value={values.estimatedBudget} options={budgetOptions} error={errors.estimatedBudget} onChange={updateValue} />
      </div>

      <label className="grid gap-2 text-sm text-ivory/75" htmlFor="message">
        Message <span className="text-ivory/45">(optional)</span>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={2000}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          placeholder="Anything helpful about your plans or priorities"
          className={`${inputClass} min-h-28 resize-y py-3`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <span id="message-error" className="text-sm text-red-200">{errors.message}</span> : null}
      </label>

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(event) => updateValue("companyWebsite", event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary min-h-14 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? "Checking Your Date…" : "Check Your Date"}
      </button>
      <p className="text-center text-xs leading-5 text-ivory/48">
        By submitting this form, you agree that Brandon Media Group may use the information provided
        to respond to your inquiry. See our{" "}
        <TrackedPrivacyLink location="form_notice" className="underline decoration-white/30 underline-offset-4 transition hover:text-white" />.
      </p>
    </form>
  );
}

type TextFieldProps = {
  label: string;
  name: keyof FormValues;
  type?: "text" | "email" | "tel" | "date";
  value: string;
  error?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel";
  placeholder?: string;
  onChange: (name: keyof FormValues, value: string) => void;
};

function TextField({ label, name, type = "text", value, error, autoComplete, inputMode, placeholder, onChange }: TextFieldProps) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm text-ivory/75" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-[3.25rem] w-full rounded-none border border-white/15 bg-white/[0.045] px-4 text-base text-white outline-none transition placeholder:text-ivory/35 focus:border-gold"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error ? <span id={errorId} className="text-sm text-red-200">{error}</span> : null}
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  options: readonly string[];
  error?: string;
  onChange: (name: keyof FormValues, value: string) => void;
};

function SelectField({ label, name, value, options, error, onChange }: SelectFieldProps) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm text-ivory/75" htmlFor={name}>
      {label}
      <select
        id={name}
        name={name}
        value={value}
        required
        onChange={(event) => onChange(name, event.target.value)}
        className="min-h-[3.25rem] w-full rounded-none border border-white/15 bg-ink px-4 text-base text-white outline-none transition focus:border-gold"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="">Select</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      {error ? <span id={errorId} className="text-sm text-red-200">{error}</span> : null}
    </label>
  );
}
