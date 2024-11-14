import { env } from "~/env";

export const siteConfig = {
  name: "scoop",
  title: "Scoop - 10-Second AI Sports Updates for Busy Fans",
  description:
    "Get personalized AI-powered sports summaries in 10 seconds. Stay updated on NBA, NFL, MLB, NHL, and FIFA without the time commitment. Perfect for busy sports fans.",
  shortDescription: "AI-powered sports summaries for busy fans",
  altShortDescription: "10-second sports updates for busy fans",
  url: env.URL,
  ogImage: "/src/app/opengraph-image.png",
  twitterImage: "/src/app/twitter-image.png",
  keywords: [
    "sports updates",
    "AI sports summaries",
    "quick sports news",
    "personalized sports updates",
    "10 second sports updates",
    "sports AI",
    "NBA updates",
    "NFL updates",
    "MLB updates",
    "NHL updates",
    "FIFA updates",
    "sports digest",
    "sports highlights",
    "sports technology",
    "sports innovation",
  ],
};
