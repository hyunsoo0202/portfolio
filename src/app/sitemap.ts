import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects
    .filter((project) => project.detail)
    .map((project) => ({
      url: `https://www.sooman.dev/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [
    {
      url: 'https://www.sooman.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectPages,
  ]
}
