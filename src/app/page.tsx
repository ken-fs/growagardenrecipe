"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, ChefHat } from "lucide-react";

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
    variants: 1,
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
    variants: 6,
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
    variants: 6,
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
    variants: 5,
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
    variants: 5,
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
    variants: 7,
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
    variants: 3,
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
    variants: 2,
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
    variants: 4,
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
    variants: 6,
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
    variants: 3,
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
    variants: 4,
  },
];

const rarityFilters = [
  "All",
  "Common",
  "Divine",
  "Mythical",
  "Legendary",
  "Prismatic",
];

// 模糊搜索函数
const fuzzySearch = (query: string, text: string): boolean => {
  if (!query) return true;

  const queryLower = query.toLowerCase().trim();
  const textLower = text.toLowerCase();

  // 1. 完全匹配
  if (textLower.includes(queryLower)) return true;

  // 2. 单词匹配 - 检查查询中的每个单词是否都在文本中
  const queryWords = queryLower.split(/\s+/);
  if (queryWords.every((word) => textLower.includes(word))) return true;

  // 3. 首字母匹配 - 检查查询是否是文本中单词的首字母
  const textWords = textLower.split(/\s+/);
  const textInitials = textWords.map((word) => word[0]).join("");
  if (textInitials.includes(queryLower)) return true;

  // 4. 模糊匹配 - 允许字符之间有间隔
  let queryIndex = 0;
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++;
    }
  }
  if (queryIndex === queryLower.length) return true;

  // 5. 相似度匹配 - 简单的编辑距离
  const similarity = calculateSimilarity(queryLower, textLower);
  return similarity > 0.6;
};

// 计算字符串相似度
const calculateSimilarity = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) return 1.0;

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

// 计算编辑距离
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("All");

  const filteredRecipes = pixelRecipes.filter((recipe) => {
    const matchesSearch = searchQuery
      ? // 搜索食谱标题
        fuzzySearch(searchQuery, recipe.title) ||
        // 搜索食材
        recipe.ingredients.some((ing) => fuzzySearch(searchQuery, ing)) ||
        // 搜索主要食谱
        fuzzySearch(searchQuery, recipe.mainRecipe) ||
        // 搜索替代食谱
        fuzzySearch(searchQuery, recipe.alternativeRecipes) ||
        // 搜索稀有度
        fuzzySearch(searchQuery, recipe.rarity)
      : true;

    const matchesRarity =
      selectedRarity === "All" ||
      recipe.rarity === selectedRarity.toUpperCase();
    return matchesSearch && matchesRarity;
  });

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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search recipes and ingredien"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-800 rounded-none bg-white text-lg font-mono focus:outline-none focus:border-green-600"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* Rarity Filters */}
          <div className="flex gap-2 mb-4">
            {rarityFilters.map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-4 py-2 border-2 border-gray-800 font-mono text-sm ${
                  selectedRarity === rarity
                    ? "bg-green-600 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
                style={{ imageRendering: "pixelated" }}
              >
                {rarity}
              </button>
            ))}
          </div>

          {/* Results Banner */}
          <div className="flex items-center gap-2 mb-6">
            <ChefHat className="h-4 w-4 text-green-600" />
            <span className="text-sm font-mono text-gray-800">
              Showing {filteredRecipes.length} of {pixelRecipes.length} recipes
            </span>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white border-2 border-gray-800 p-4 hover:shadow-lg transition-shadow flex flex-col h-full"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Recipe Icon */}
              <div className="text-center mb-4">
                <div
                  className="text-6xl mb-2"
                  style={{ imageRendering: "pixelated" }}
                >
                  {recipe.icon}
                </div>
                <h3 className="text-xl font-bold font-mono text-gray-900 mb-1">
                  {recipe.title}
                </h3>
                {recipe.cookTime && (
                  <p className="text-sm text-gray-600 font-mono">
                    {recipe.cookTime}
                  </p>
                )}
              </div>

              {/* Rarity Badge */}
              <div className="mb-3">
                <span
                  className={`px-3 py-1 text-xs font-mono text-white ${recipe.rarityColor}`}
                >
                  {recipe.rarity}
                </span>
              </div>

              {/* Main Recipe */}
              <div className="mb-3">
                <p className="text-sm font-mono text-gray-800 mb-2">
                  <strong>Main Recipe:</strong>
                </p>
                <p className="text-sm font-mono text-gray-700">
                  {recipe.mainRecipe}
                </p>
                <p className="text-xs font-mono text-gray-500 mt-1">
                  {recipe.alternativeRecipes}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-4 flex-grow">
                <div className="flex flex-wrap gap-1">
                  {recipe.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 border border-gray-400 text-xs font-mono text-gray-800"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Recipe Button */}
              <div className="mt-auto">
                <Link href={`/recipes/${recipe.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm py-2 border-2 border-gray-800 rounded-none">
                    View Full Recipe
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-mono">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Instant Search */}
            <div className="bg-white border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                Instant Search
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Find recipes by name or ingredient within milliseconds.
              </p>
            </div>

            {/* Color-Coded Rarity */}
            <div className="bg-white border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-4">🌈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                Color-Coded Rarity
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Instantly spot rare gems, Divine, Mythical and more.
              </p>
            </div>

            {/* Authentic Pixel Art */}
            <div className="bg-white border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                Authentic Pixel Art
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                UI mimics classic sandbox-game crafting tables.
              </p>
            </div>

            {/* Responsive Layout */}
            <div className="bg-white border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                Responsive Layout
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Smooth experience on mobile, tablet and desktop.
              </p>
            </div>

            {/* Blazing Performance */}
            <div className="bg-white border-2 border-gray-800 p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                Blazing Performance
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Static generation + Vercel Edge deliver LCP &lt; 2.0s.
              </p>
            </div>
          </div>
        </section>

        {/* Trending Recipes Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-mono">
              Trending Recipes
            </h2>
            <p className="text-lg text-gray-600 font-mono">
              The most-cooked dishes right now- click any card to view full
              variants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pixelRecipes.slice(0, 4).map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white border-2 border-gray-800 p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
                style={{ imageRendering: "pixelated" }}
              >
                <div className="text-4xl mb-3">{recipe.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                  {recipe.title}
                </h3>
                <div className="mb-2">
                  <span
                    className={`px-2 py-1 text-xs font-mono text-white ${recipe.rarityColor}`}
                  >
                    {recipe.rarity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-mono mb-1">
                  {recipe.variants} variant{recipe.variants !== 1 ? "s" : ""}
                </p>
                {recipe.cookTime && (
                  <p className="text-sm text-gray-600 font-mono">
                    {recipe.cookTime}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Rarity Guide Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-mono">
              Rarity Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Premium Grade */}
            <div className="bg-white border-2 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-2 font-mono">
                ◆ Premium Grade
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Highest quality-requires rare crops and grants maximum garden
                XP.
              </p>
            </div>

            {/* Divine */}
            <div className="bg-white border-2 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-orange-500 mb-2 font-mono">
                Divine
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Premium dishes that boost energy and growth speed.
              </p>
            </div>

            {/* Mythical */}
            <div className="bg-white border-2 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-red-600 mb-2 font-mono">
                Mythical
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Hard-to-find combos with unique visual effects.
              </p>
            </div>

            {/* Legendary */}
            <div className="bg-white border-2 border-gray-800 p-6">
              <h3 className="text-lg font-bold text-orange-600 mb-2 font-mono">
                Legendary
              </h3>
              <p className="text-sm text-gray-600 font-mono">
                Balanced classics suitable for mid-game progression.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
