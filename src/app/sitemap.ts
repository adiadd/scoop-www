import { siteConfig } from "~/config/site";

export default function sitemap() {
  const routes = ["", "/features", "/about", "/blog"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
