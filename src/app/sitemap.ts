import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://muhammadfalahaufaanggara.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://muhammadfalahaufaanggara.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muhammadfalahaufaanggara.com/product",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
