export const getServerSideProps = async ({ res }) => {
  const baseUrl = 'https://remstirmash.od.ua'
  const { seoConfig } = await import('../utils/seoConfig')
  const routes = Object.keys(seoConfig)
    .filter((p) => p && p.startsWith('/'))
    .map((path) => `${baseUrl}${path === '/' ? '' : path}`)

  const lastmod = new Date().toISOString()
  const urls = routes
    .map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${url === baseUrl ? '1.0' : '0.7'}</priority>\n  </url>`)
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function SiteMap() { return null }
