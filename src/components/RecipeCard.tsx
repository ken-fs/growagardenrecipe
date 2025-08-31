import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "@/lib/types";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getDifficultyColor(recipe.difficulty)}>
            {recipe.difficulty}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <Link href={`/recipes/${recipe.id}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-green-600 transition-colors">
            {recipe.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>

        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{recipe.rating}</span>
          <span className="text-sm text-gray-500">
            ({recipe.reviews} reviews)
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/recipes/${recipe.id}`} className="w-full">
          <div className="w-full bg-green-600 text-white py-2 px-4 rounded-md text-center hover:bg-green-700 transition-colors">
            View Recipe
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};
