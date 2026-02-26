import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pathixo.com",
            lastModified: new Date(),
        },
        {
            url: "https://pathixo.com/about",
            lastModified: new Date(),
        },
        {
            url: "https://pathixo.com/portfolio",
            lastModified: new Date(),
        },
        {
            url: "https://pathixo.com/careers",
            lastModified: new Date(),
        },
    ];
}
