import { googleAdsId } from "@/lib/site";

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

const googleAdsLeadConversionId = `${googleAdsId}/QWoCCILu9vwcENm59eJE`;

type DataLayerEntry = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    gtag?: (
      command: "event",
      eventName: "conversion",
      parameters: { send_to: string }
    ) => void;
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

export function trackGoogleAdsLeadConversion() {
  if (typeof window === "undefined") return;

  const parameters = { send_to: googleAdsLeadConversionId };

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", parameters);
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  queueGoogleAdsCommand("event", "conversion", parameters);
}

function queueGoogleAdsCommand(
  _command: "event",
  _eventName: "conversion",
  _parameters: { send_to: string }
) {
  window.dataLayer?.push(arguments);
}
