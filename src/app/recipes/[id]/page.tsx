import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, ChefHat, Star } from "lucide-react";

// 像素艺术风格的食谱数据
const pixelRecipes = [
  {
    id: "soup",
    title: "Soup",
    icon: "🥕",
    cookTime: "~5 minutes",
    rarity: "COMMON",
    mainRecipe: "Carrot x1",
    alternativeRecipes: "+0 more",
    ingredients: ["Carrot x1"],
    rarityColor: "bg-gray-500",
    variantCount: 1,
    description: "A simple and nutritious soup made from fresh carrots.",
    variants: [
      {
        name: "Basic Soup",
        ingredients: ["Carrot x1"],
        cookTime: "~5 minutes",
        description: "The simplest soup recipe using just one carrot.",
      },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    icon: "🥗",
    cookTime: "",
    rarity: "PRISMATIC",
    mainRecipe: "1x Tomato, 4x Bone Blossom",
    alternativeRecipes: "+8 more",
    ingredients: ["1x Tomato", "4x Bone Blossom"],
    rarityColor: "bg-purple-600",
    variantCount: 6,
    description: "A refreshing salad with a perfect balance of flavors.",
    variants: [
      {
        name: "Classic Salad",
        ingredients: ["1x Tomato", "4x Bone Blossom"],
        cookTime: "~3 minutes",
        description: "The traditional salad recipe.",
      },
      {
        name: "Garden Salad",
        ingredients: ["2x Tomato", "2x Bone Blossom", "1x Carrot"],
        cookTime: "~4 minutes",
        description: "A more complex salad with additional vegetables.",
      },
      {
        name: "Premium Salad",
        ingredients: ["1x Tomato", "3x Bone Blossom", "1x Sugar Apple"],
        cookTime: "~5 minutes",
        description: "A premium version with sweet apple.",
      },
    ],
  },
  {
    id: "cake",
    title: "Cake",
    icon: "🍰",
    cookTime: "",
    rarity: "PRISMATIC",
    mainRecipe: "3x Bone Blossom, 1x Sugar Apple, 1x Banana",
    alternativeRecipes: "+12 more",
    ingredients: ["3x Bone Blossom", "1x Sugar Apple", "1x Banana"],
    rarityColor: "bg-purple-600",
    variantCount: 6,
    description: "A delicious cake perfect for celebrations.",
    variants: [
      {
        name: "Classic Cake",
        ingredients: ["3x Bone Blossom", "1x Sugar Apple", "1x Banana"],
        cookTime: "~15 minutes",
        description: "The traditional cake recipe.",
      },
      {
        name: "Chocolate Cake",
        ingredients: ["2x Bone Blossom", "2x Sugar Apple", "1x Banana"],
        cookTime: "~18 minutes",
        description: "A rich chocolate version.",
      },
      {
        name: "Fruit Cake",
        ingredients: ["3x Bone Blossom", "2x Sugar Apple", "2x Banana"],
        cookTime: "~20 minutes",
        description: "Extra fruity and sweet.",
      },
    ],
  },
  {
    id: "donut",
    title: "Donut",
    icon: "🍩",
    cookTime: "",
    rarity: "PRISMATIC",
    mainRecipe: "1x Sugarglaze, 4x Bone Blossom",
    alternativeRecipes: "+5 more",
    ingredients: ["1x Sugarglaze", "4x Bone Blossom"],
    rarityColor: "bg-purple-600",
    variantCount: 5,
    description: "Sweet and fluffy donuts that everyone loves.",
    variants: [
      {
        name: "Classic Donut",
        ingredients: ["1x Sugarglaze", "4x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "The traditional donut recipe.",
      },
      {
        name: "Glazed Donut",
        ingredients: ["2x Sugarglaze", "3x Bone Blossom"],
        cookTime: "~10 minutes",
        description: "Extra sweet with double glaze.",
      },
    ],
  },
  {
    id: "sandwich",
    title: "Sandwich",
    icon: "🥪",
    cookTime: "~7 minutes",
    rarity: "PRISMATIC",
    mainRecipe: "1x Tomato, 1x Banana, 3x Bone Blossom",
    alternativeRecipes: "+5 more",
    ingredients: ["1x Tomato", "1x Banana", "3x Bone Blossom"],
    rarityColor: "bg-purple-600",
    variantCount: 5,
    description: "A hearty sandwich perfect for any meal.",
    variants: [
      {
        name: "Classic Sandwich",
        ingredients: ["1x Tomato", "1x Banana", "3x Bone Blossom"],
        cookTime: "~7 minutes",
        description: "The traditional sandwich recipe.",
      },
      {
        name: "Garden Sandwich",
        ingredients: ["2x Tomato", "1x Banana", "2x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "Extra tomato for a garden fresh taste.",
      },
    ],
  },
  {
    id: "pie",
    title: "Pie",
    icon: "🥧",
    cookTime: "~8 minutes",
    rarity: "PRISMATIC",
    mainRecipe: "1x Pumpkin, 4x Bone Blossom",
    alternativeRecipes: "+7 more",
    ingredients: ["1x Pumpkin", "4x Bone Blossom"],
    rarityColor: "bg-purple-600",
    variantCount: 7,
    description: "A warm and comforting pie perfect for autumn.",
    variants: [
      {
        name: "Classic Pie",
        ingredients: ["1x Pumpkin", "4x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "The traditional pie recipe.",
      },
      {
        name: "Sweet Pie",
        ingredients: ["1x Pumpkin", "3x Bone Blossom", "1x Sugar Apple"],
        cookTime: "~10 minutes",
        description: "A sweeter version with apple.",
      },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    icon: "🍔",
    cookTime: "~10 minutes",
    rarity: "DIVINE",
    mainRecipe: "1x Violet Corn, 2x Bone Blossom",
    alternativeRecipes: "+3 more",
    ingredients: ["1x Violet Corn", "2x Bone Blossom"],
    rarityColor: "bg-orange-500",
    variantCount: 3,
    description: "A divine burger with premium ingredients.",
    variants: [
      {
        name: "Classic Burger",
        ingredients: ["1x Violet Corn", "2x Bone Blossom"],
        cookTime: "~10 minutes",
        description: "The traditional burger recipe.",
      },
      {
        name: "Deluxe Burger",
        ingredients: ["2x Violet Corn", "1x Bone Blossom"],
        cookTime: "~12 minutes",
        description: "Extra corn for a more filling burger.",
      },
    ],
  },
  {
    id: "hotdog",
    title: "Hot Dog",
    icon: "🌭",
    cookTime: "~6 minutes",
    rarity: "DIVINE",
    mainRecipe: "1x Violet Corn, 1x Bone Blossom",
    alternativeRecipes: "+2 more",
    ingredients: ["1x Violet Corn", "1x Bone Blossom"],
    rarityColor: "bg-orange-500",
    variantCount: 2,
    description: "A quick and tasty hot dog perfect for snacks.",
    variants: [
      {
        name: "Classic Hot Dog",
        ingredients: ["1x Violet Corn", "1x Bone Blossom"],
        cookTime: "~6 minutes",
        description: "The traditional hot dog recipe.",
      },
      {
        name: "Gourmet Hot Dog",
        ingredients: ["1x Violet Corn", "2x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "A more elaborate version.",
      },
    ],
  },
  {
    id: "waffle",
    title: "Waffle",
    icon: "🧇",
    cookTime: "~8 minutes",
    rarity: "MYTHICAL",
    mainRecipe: "2x Sugar Apple, 1x Bone Blossom",
    alternativeRecipes: "+4 more",
    ingredients: ["2x Sugar Apple", "1x Bone Blossom"],
    rarityColor: "bg-red-600",
    variantCount: 4,
    description: "A mythical waffle with unique visual effects.",
    variants: [
      {
        name: "Classic Waffle",
        ingredients: ["2x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "The traditional waffle recipe.",
      },
      {
        name: "Golden Waffle",
        ingredients: ["3x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~10 minutes",
        description: "Extra sweet with golden appearance.",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    icon: "🍕",
    cookTime: "~12 minutes",
    rarity: "LEGENDARY",
    mainRecipe: "1x Tomato, 2x Bone Blossom, 1x Violet Corn",
    alternativeRecipes: "+6 more",
    ingredients: ["1x Tomato", "2x Bone Blossom", "1x Violet Corn"],
    rarityColor: "bg-orange-600",
    variantCount: 6,
    description: "A legendary pizza perfect for sharing.",
    variants: [
      {
        name: "Classic Pizza",
        ingredients: ["1x Tomato", "2x Bone Blossom", "1x Violet Corn"],
        cookTime: "~12 minutes",
        description: "The traditional pizza recipe.",
      },
      {
        name: "Supreme Pizza",
        ingredients: ["2x Tomato", "2x Bone Blossom", "1x Violet Corn"],
        cookTime: "~15 minutes",
        description: "Extra toppings for a supreme experience.",
      },
    ],
  },
  {
    id: "pancake",
    title: "Pancake",
    icon: "🥞",
    cookTime: "~7 minutes",
    rarity: "DIVINE",
    mainRecipe: "1x Sugar Apple, 1x Bone Blossom",
    alternativeRecipes: "+3 more",
    ingredients: ["1x Sugar Apple", "1x Bone Blossom"],
    rarityColor: "bg-orange-500",
    variantCount: 3,
    description: "Fluffy pancakes perfect for breakfast.",
    variants: [
      {
        name: "Classic Pancake",
        ingredients: ["1x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~7 minutes",
        description: "The traditional pancake recipe.",
      },
      {
        name: "Stacked Pancake",
        ingredients: ["2x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~9 minutes",
        description: "Extra thick and sweet.",
      },
    ],
  },
  {
    id: "cookie",
    title: "Cookie",
    icon: "🍪",
    cookTime: "~5 minutes",
    rarity: "MYTHICAL",
    mainRecipe: "1x Sugar Apple, 2x Bone Blossom",
    alternativeRecipes: "+4 more",
    ingredients: ["1x Sugar Apple", "2x Bone Blossom"],
    rarityColor: "bg-red-600",
    variantCount: 4,
    description: "Sweet cookies with a magical touch.",
    variants: [
      {
        name: "Classic Cookie",
        ingredients: ["1x Sugar Apple", "2x Bone Blossom"],
        cookTime: "~5 minutes",
        description: "The traditional cookie recipe.",
      },
      {
        name: "Double Cookie",
        ingredients: ["2x Sugar Apple", "2x Bone Blossom"],
        cookTime: "~7 minutes",
        description: "Extra sweet with double sugar.",
      },
    ],
  },
];

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = pixelRecipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #90EE90 25%, transparent 25%), 
          linear-gradient(-45deg, #90EE90 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, #90EE90 75%), 
          linear-gradient(-45deg, transparent 75%, #90EE90 75%)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }}
    >
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button
            variant="outline"
            className="mb-6 border-2 border-gray-800 font-mono"
            style={{ imageRendering: "pixelated" }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Recipes
          </Button>
        </Link>

        {/* Recipe Header */}
        <div
          className="bg-white border-2 border-gray-800 p-8 mb-8"
          style={{ imageRendering: "pixelated" }}
        >
          <div className="text-center mb-6">
            <div
              className="text-8xl mb-4"
              style={{ imageRendering: "pixelated" }}
            >
              {recipe.icon}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-mono">
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-600 font-mono mb-4">
              {recipe.description}
            </p>

            {/* Rarity Badge */}
            <div className="mb-4">
              <span
                className={`px-4 py-2 text-sm font-mono text-white ${recipe.rarityColor}`}
              >
                {recipe.rarity}
              </span>
            </div>

            {/* Cook Time */}
            {recipe.cookTime && (
              <div className="flex items-center justify-center gap-2 text-gray-600 font-mono">
                <Clock className="h-5 w-5" />
                <span>{recipe.cookTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Recipe Variants */}
        <div
          className="bg-white border-2 border-gray-800 p-6 mb-8"
          style={{ imageRendering: "pixelated" }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mono flex items-center gap-2">
            <ChefHat className="h-6 w-6" />
            Recipe Variants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipe.variants.map((variant, index) => (
              <div
                key={index}
                className="border-2 border-gray-400 p-4 bg-gray-50"
                style={{ imageRendering: "pixelated" }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                  {variant.name}
                </h3>
                <p className="text-sm text-gray-600 font-mono mb-3">
                  {variant.description}
                </p>

                {/* Ingredients */}
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-gray-800 font-mono mb-2">
                    Ingredients:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {variant.ingredients.map((ingredient, ingIndex) => (
                      <span
                        key={ingIndex}
                        className="px-2 py-1 bg-gray-200 border border-gray-400 text-xs font-mono text-gray-800"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cook Time */}
                {variant.cookTime && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-mono">
                    <Clock className="h-4 w-4" />
                    <span>{variant.cookTime}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients List */}
        <div
          className="bg-white border-2 border-gray-800 p-6 mb-8"
          style={{ imageRendering: "pixelated" }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mono">
            All Ingredients
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipe.ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="border-2 border-gray-400 p-3 bg-gray-50 text-center"
                style={{ imageRendering: "pixelated" }}
              >
                <span className="text-sm font-mono text-gray-800">
                  {ingredient}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Stats */}
        <div
          className="bg-white border-2 border-gray-800 p-6"
          style={{ imageRendering: "pixelated" }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mono">
            Recipe Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-mono mb-2">
                {recipe.variantCount}
              </div>
              <div className="text-sm text-gray-600 font-mono">
                Total Variants
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-mono mb-2">
                {recipe.ingredients.length}
              </div>
              <div className="text-sm text-gray-600 font-mono">
                Main Ingredients
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-mono mb-2">
                {recipe.rarity}
              </div>
              <div className="text-sm text-gray-600 font-mono">
                Rarity Level
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
