import AppConfig from '@/config/app';
import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: AppConfig.Domain,
      lastModified: new Date(),
    },
    {
      url: AppConfig.Domain+'/chat',
      lastModified: new Date(),
    },
  ];
}