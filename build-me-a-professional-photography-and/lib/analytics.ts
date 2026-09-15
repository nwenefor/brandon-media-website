export type WeddingEventName =
  | "wedding_landing_view"
  | "check_date_click"
  | "watch_film_click"
  | "form_start"
  | "form_submit"
  | "form_success"
  | "gallery_click"
  | "consultation_click"
  | "phone_click"
  | "email_click"
  | "privacy_policy_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackWeddingEvent(
  event: WeddingEventName,
  parameters: Record<string, string | number | boolean> = {}
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...parameters });
}
