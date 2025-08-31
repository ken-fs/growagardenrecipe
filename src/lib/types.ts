export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  author: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  recipeCount: number;
}

export interface SearchFilters {
  category?: string;
  difficulty?: string;
  prepTime?: string;
  rating?: number;
  tags?: string[];
}
