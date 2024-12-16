import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://my-blog-mdx.vercel.app/sitemap.xml',
    host: 'https://my-blog-mdx.vercel.app',
  };
}
