import AppConfig from '@/config/app';
import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/chat/',
    },
    sitemap: AppConfig.Domain,
  };
}