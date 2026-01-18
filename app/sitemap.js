export default async function sitemap() {
  const baseUrl = 'https://callready.live';
  const now = new Date().toISOString();

  const apiKey =
    process.env.NEXT_PUBLIC_BUILDER_API_KEY ||
    process.env.BUILDER_PUBLIC_API_KEY ||
    '';

  const urls = new Set();
  urls.add('/');

  if (apiKey) {
    let offset = 0;
    const limit = 100;

    while (true) {
      const apiUrl =
        'https://cdn.builder.io/api/v3/content/page' +
        '?apiKey=' + encodeURIComponent(apiKey) +
        '&fields=data.url' +
        '&limit=' + limit +
        '&offset=' + offset +
        '&noTargeting=true';

      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) break;

      const json = await res.json();
      const results = Array.isArray(json && json.results) ? json.results : [];

      for (const item of results) {
        const path = item && item.data && item.data.url;
        if (typeof path === 'string' && path.trim()) {
          urls.add(path.trim());
        }
      }

      if (results.length < limit) break;
      offset += limit;
    }
  }

  const entries = [];
  for (const path of urls) {
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    const fullUrl = cleanPath === '/' ? baseUrl : baseUrl + cleanPath;

    entries.push({
      url: fullUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: cleanPath === '/' ? 1 : 0.7,
    });
  }

  return entries;
}
