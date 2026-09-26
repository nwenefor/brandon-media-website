export const siteUrl = "https://www.brandonmediagroup.com";

export const business = {
  name: "Brandon Media Group LLC",
  displayName: "Brandon Media Group",
  email: "info@brandonmediagroup.com",
  phoneDisplay: "540-214-7725",
  phoneInternational: "+1-540-214-7725",
  instagram: "https://www.instagram.com/brandonmediagroup/",
  logo: "/brand/bmg_minimal_mark.svg"
} as const;

// Public sitewide destination only. Conversion labels are intentionally not configured here.
export const googleAdsId = "AW-18461056217";

export const primaryWeddingRoutes = [
  "/wedding-videography",
  "/wedding-photography",
  "/wedding-photo-video",
  "/engagement-photography",
  "/alexandria-wedding-photographer-videographer",
  "/northern-virginia-wedding-photographer-videographer"
] as const;

export const publicRoutes = [
  "/",
  ...primaryWeddingRoutes,
  "/corporate-events",
  "/real-estate-media",
  "/business-promo-videos",
  "/about",
  "/privacy"
] as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: business.name,
  alternateName: business.displayName,
  url: siteUrl,
  logo: `${siteUrl}${business.logo}`,
  telephone: business.phoneInternational,
  email: business.email,
  sameAs: [business.instagram]
};
