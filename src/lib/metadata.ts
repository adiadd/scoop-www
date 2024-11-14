import type { Metadata } from "next";
import { siteConfig } from "~/config/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s / ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Sports Updates`,
      },
    ],
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    images: [siteConfig.twitterImage],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
