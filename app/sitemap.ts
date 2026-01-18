import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
const baseUrl = 'https://callready.live
'

return [
{
url: baseUrl,
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 1,
},
]
}