export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://llantasimportacion.vercel.app/</loc>
        <lastmod>2023-08-08T18:45:41+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://llantasimportacion.vercel.app/productos</loc>
        <lastmod>2023-08-08T18:45:41+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://llantasimportacion.vercel.app/sobre_nosotros</loc>
        <lastmod>2023-08-08T18:45:41+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://llantasimportacion.vercel.app/ofertas</loc>
        <lastmod>2023-08-08T18:45:41+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      
      
      </urlset>`
  
    res.end(xml)
  }