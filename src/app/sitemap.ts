import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growagardenrecipe.net'
  
  // 食谱列表
  const recipes = [
    'soup', 'salad', 'cake', 'donut', 'sandwich', 'pie', 'burger', 'hotdog', 
    'waffle', 'pizza', 'pancake', 'cookie', 'bread', 'pasta', 'stew', 'sushi',
    'tiramisu', 'macarons', 'croissant', 'muffin', 'bagel', 'pretzel', 'taco',
    'burrito', 'quesadilla', 'nachos', 'churro', 'flan', 'gelato', 'sorbet',
    'smoothie', 'milkshake'
  ]

  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ]

  // 食谱页面
  const recipePages = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...recipePages]
}
