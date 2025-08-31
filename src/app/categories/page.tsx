import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recipe Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore recipes organized by the type of fresh ingredients from your
            garden. Each category offers a unique collection of delicious
            recipes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Browse all our recipes or use our search feature to find specific
              ingredients or dishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/recipes"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Browse All Recipes
              </a>
              <a
                href="/recipes"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Search Recipes
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
