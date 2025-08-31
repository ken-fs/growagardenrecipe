import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { categories, recipes } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  const categoryRecipes = recipes.filter((recipe) => recipe.category === id);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/categories">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {category.name} Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            {category.description}
          </p>
          <p className="text-gray-500">
            {categoryRecipes.length} recipes available
          </p>
        </div>

        {/* Recipes Grid */}
        {categoryRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No recipes found in this category
            </h3>
            <p className="text-gray-600 mb-4">
              We're working on adding more recipes to this category. Check back
              soon!
            </p>
            <Link href="/recipes">
              <Button variant="outline">Browse All Recipes</Button>
            </Link>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories
              .filter((c) => c.id !== id)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  href={`/categories/${relatedCategory.id}`}
                >
                  <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedCategory.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedCategory.description}
                    </p>
                    <p className="text-green-600 text-sm font-medium">
                      {relatedCategory.recipeCount} recipes
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
