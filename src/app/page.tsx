import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Leaf, Users } from "lucide-react";
import { recipes, categories } from "@/lib/data";

export default function Home() {
  const featuredRecipes = recipes.slice(0, 6);
  const featuredCategories = categories.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fresh Recipes from Your Garden
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Discover delicious recipes using fresh ingredients from your
                garden. From vegetables to herbs, find the perfect recipe for
                your homegrown produce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/recipes">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100"
                  >
                    Browse Recipes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600"
                  >
                    View Categories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop&crop=center"
                alt="Fresh garden vegetables"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Delicious Recipes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-gray-600">Garden Categories</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Gardeners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garden Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore recipes organized by the type of fresh ingredients from
              your garden
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular recipes using fresh garden ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/recipes">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with New Recipes
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get the latest garden recipes delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
