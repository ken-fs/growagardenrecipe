import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, ArrowLeft, ChefHat } from "lucide-react";
import { recipes } from "@/lib/data";

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

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
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/recipes">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Image */}
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Recipe Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getDifficultyColor(recipe.difficulty)}>
                  {recipe.difficulty}
                </Badge>
                <Badge variant="secondary">{recipe.category}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {recipe.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>

              {/* Recipe Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>
                    {recipe.rating} ({recipe.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ChefHat className="h-6 w-6" />
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Author Info */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Recipe by
                  </h3>
                  <p className="text-gray-600">{recipe.author}</p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Difficulty</span>
                      <Badge className={getDifficultyColor(recipe.difficulty)}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Time</span>
                      <span className="font-medium">
                        {recipe.prepTime} + {recipe.cookTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Servings</span>
                      <span className="font-medium">{recipe.servings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{recipe.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Share Recipe */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Share Recipe
                  </h3>
                  <div className="space-y-2">
                    <Button className="w-full" variant="outline">
                      Share on Facebook
                    </Button>
                    <Button className="w-full" variant="outline">
                      Share on Twitter
                    </Button>
                    <Button className="w-full" variant="outline">
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
