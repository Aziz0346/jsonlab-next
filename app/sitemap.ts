import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jsonlab.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/local-json-formatting-security`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/json-validation-guide`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/json-mapper-guide`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/plain-text-to-json`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
