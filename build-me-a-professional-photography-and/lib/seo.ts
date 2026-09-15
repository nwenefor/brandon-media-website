import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path,
  image = "/og.png"
}: PageMetadata): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: business.displayName,
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${business.displayName} wedding photography and films`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
