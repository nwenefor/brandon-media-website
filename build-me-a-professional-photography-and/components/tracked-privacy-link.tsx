"use client";

import type { ReactNode } from "react";
import { trackWeddingEvent } from "@/lib/analytics";

type TrackedPrivacyLinkProps = {
  location: "form_notice" | "footer";
  className?: string;
  children?: ReactNode;
};

export function TrackedPrivacyLink({
  location,
  className,
  children = "Privacy Policy"
}: TrackedPrivacyLinkProps) {
  return (
    <a
      href="/privacy"
      className={className}
      onClick={() =>
        trackWeddingEvent("privacy_policy_click", {
          page_path: window.location.pathname,
          cta_location: location
        })
      }
    >
      {children}
    </a>
  );
}
