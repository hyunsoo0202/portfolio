import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.sooman.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // 나중에 페이지가 추가되면 여기에 더 넣을 수 있습니다.
  ]
}
