"use client";

import type { ReactNode } from "react";
import { trackWeddingEvent } from "@/lib/analytics";

type PixiesetGalleryLinkProps = {
  location: "portfolio_section" | "form_success" | "navigation";
  className?: string;
  children: ReactNode;
};

function configuredGalleryUrl() {
  const value = process.env.NEXT_PUBLIC_PIXIESET_GALLERY_URL;
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !url.hostname.endsWith(".pixieset.com")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function PixiesetGalleryLink({
  location,
  className,
  children
}: PixiesetGalleryLinkProps) {
  const galleryUrl = configuredGalleryUrl();
  if (!galleryUrl) return null;

  return (
    <a
      href={galleryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackWeddingEvent("gallery_click", {
          page_path: window.location.pathname,
          cta_location: location
        })
      }
    >
      {children}
    </a>
  );
}
