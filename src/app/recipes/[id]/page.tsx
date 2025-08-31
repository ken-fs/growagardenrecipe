import React from "react";
import Link from "next/link";
import { CopyButton } from "./CopyButton";

// 像素艺术风格的食谱数据 - 包含详细的变体信息
const pixelRecipes = [
  {
    id: "soup",
    title: "Soup",
    icon: "🥕",
    cookTime: "~5 minutes",
    rarity: "COMMON",
    mainRecipe: "Carrot x1",
    alternativeRecipes: "+2 more",
    ingredients: ["Carrot x1"],
    rarityColor: "bg-gray-500",
    variantCount: 3,
    description: "A simple and nutritious soup made from fresh carrots.",
    variants: [
      {
        name: "Basic Soup",
        ingredients: ["Carrot x1"],
        cookTime: "~5 minutes",
        description: "The simplest soup recipe using just one carrot.",
        rarity: "COMMON",
        rarityColor: "bg-gray-500",
      },
      {
        name: "Garden Soup",
        ingredients: ["Carrot x1", "Tomato x1"],
        cookTime: "~7 minutes",
        description: "A more flavorful soup with added tomato.",
        rarity: "COMMON",
        rarityColor: "bg-gray-500",
      },
      {
        name: "Herb Soup",
        ingredients: ["Carrot x1", "Basil x1"],
        cookTime: "~6 minutes",
        description: "Aromatic soup with fresh basil.",
        rarity: "RARE",
        rarityColor: "bg-blue-500",
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
    description:
      "This recipe has 6 variants with different ingredient combinations.",
    variants: [
      {
        name: "Prismatic Salad",
        ingredients: ["1x Tomato", "4x Bone Blossom"],
        cookTime: "~3 minutes",
        description: "The most basic salad combination.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Divine Salad",
        ingredients: ["4x Beanstalk", "1x Tomato"],
        cookTime: "~4 minutes",
        description: "A divine combination with fresh beanstalks.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Mixed Salad",
        ingredients: [
          "2x Bone Blossom",
          "1x Pineapple",
          "1x Pepper",
          "1x Tomato",
        ],
        cookTime: "~5 minutes",
        description: "A complex mix of flavors and textures.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Mythical Salad",
        ingredients: ["3x Bone Blossom", "2x Pineapple", "1x Pepper"],
        cookTime: "~6 minutes",
        description: "A mythical combination with rare ingredients.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Legendary Salad",
        ingredients: ["4x Pineapple", "2x Pepper", "1x Tomato"],
        cookTime: "~7 minutes",
        description: "A legendary salad with premium ingredients.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Ultimate Salad",
        ingredients: [
          "5x Bone Blossom",
          "3x Pineapple",
          "2x Pepper",
          "2x Tomato",
        ],
        cookTime: "~8 minutes",
        description: "The ultimate salad with all ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
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
    description:
      "This recipe has 6 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Cake",
        ingredients: ["3x Bone Blossom", "1x Sugar Apple", "1x Banana"],
        cookTime: "~15 minutes",
        description: "A simple cake with basic ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Chocolate Cake",
        ingredients: ["4x Bone Blossom", "2x Sugar Apple", "1x Cocoa"],
        cookTime: "~18 minutes",
        description: "Rich chocolate cake with cocoa powder.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Fruit Cake",
        ingredients: ["2x Bone Blossom", "3x Sugar Apple", "2x Banana"],
        cookTime: "~20 minutes",
        description: "Fruity cake with extra sweetness.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Vanilla Cake",
        ingredients: ["3x Bone Blossom", "2x Sugar Apple", "1x Vanilla"],
        cookTime: "~16 minutes",
        description: "Classic vanilla cake with aromatic vanilla.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Spice Cake",
        ingredients: ["4x Bone Blossom", "1x Sugar Apple", "2x Cinnamon"],
        cookTime: "~17 minutes",
        description: "Warm spice cake with cinnamon.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Deluxe Cake",
        ingredients: [
          "5x Bone Blossom",
          "3x Sugar Apple",
          "2x Banana",
          "1x Cocoa",
        ],
        cookTime: "~25 minutes",
        description: "The ultimate deluxe cake with all ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
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
    description:
      "This recipe has 5 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Donut",
        ingredients: ["1x Sugarglaze", "4x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "A simple glazed donut.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Chocolate Donut",
        ingredients: ["1x Sugarglaze", "3x Bone Blossom", "1x Cocoa"],
        cookTime: "~10 minutes",
        description: "Chocolate glazed donut.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Sprinkled Donut",
        ingredients: ["1x Sugarglaze", "4x Bone Blossom", "1x Sprinkles"],
        cookTime: "~9 minutes",
        description: "Colorful donut with sprinkles.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Filled Donut",
        ingredients: ["1x Sugarglaze", "3x Bone Blossom", "1x Jam"],
        cookTime: "~12 minutes",
        description: "Jam-filled donut with glaze.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Deluxe Donut",
        ingredients: [
          "2x Sugarglaze",
          "4x Bone Blossom",
          "1x Cocoa",
          "1x Sprinkles",
        ],
        cookTime: "~15 minutes",
        description: "The ultimate deluxe donut.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
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
    description:
      "This recipe has 5 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Sandwich",
        ingredients: ["1x Tomato", "1x Banana", "3x Bone Blossom"],
        cookTime: "~7 minutes",
        description: "A simple sandwich with basic ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Veggie Sandwich",
        ingredients: ["2x Tomato", "2x Bone Blossom", "1x Lettuce"],
        cookTime: "~8 minutes",
        description: "Fresh vegetable sandwich.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Fruit Sandwich",
        ingredients: ["2x Banana", "1x Tomato", "2x Bone Blossom"],
        cookTime: "~6 minutes",
        description: "Sweet fruit sandwich.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Deluxe Sandwich",
        ingredients: [
          "2x Tomato",
          "2x Banana",
          "4x Bone Blossom",
          "1x Lettuce",
        ],
        cookTime: "~10 minutes",
        description: "The ultimate deluxe sandwich.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Gourmet Sandwich",
        ingredients: [
          "3x Tomato",
          "3x Banana",
          "5x Bone Blossom",
          "2x Lettuce",
        ],
        cookTime: "~12 minutes",
        description: "Gourmet sandwich with premium ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
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
    description:
      "This recipe has 7 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Pie",
        ingredients: ["1x Pumpkin", "4x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "A simple pumpkin pie.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Apple Pie",
        ingredients: ["2x Apple", "3x Bone Blossom", "1x Sugar"],
        cookTime: "~10 minutes",
        description: "Classic apple pie.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Berry Pie",
        ingredients: ["3x Berry", "2x Bone Blossom", "1x Sugar"],
        cookTime: "~9 minutes",
        description: "Sweet berry pie.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Chocolate Pie",
        ingredients: ["1x Pumpkin", "3x Bone Blossom", "2x Cocoa"],
        cookTime: "~11 minutes",
        description: "Rich chocolate pie.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Mixed Fruit Pie",
        ingredients: ["1x Apple", "2x Berry", "2x Bone Blossom", "1x Sugar"],
        cookTime: "~12 minutes",
        description: "Mixed fruit pie with various flavors.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Deluxe Pie",
        ingredients: ["2x Pumpkin", "4x Bone Blossom", "1x Apple", "1x Berry"],
        cookTime: "~14 minutes",
        description: "The ultimate deluxe pie.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
      },
      {
        name: "Ultimate Pie",
        ingredients: [
          "2x Pumpkin",
          "5x Bone Blossom",
          "2x Apple",
          "2x Berry",
          "1x Cocoa",
        ],
        cookTime: "~16 minutes",
        description: "The ultimate pie with all ingredients.",
        rarity: "PRISMATIC",
        rarityColor: "bg-purple-600",
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
    description:
      "This recipe has 3 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Burger",
        ingredients: ["1x Violet Corn", "2x Bone Blossom"],
        cookTime: "~10 minutes",
        description: "A simple burger with basic ingredients.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Cheese Burger",
        ingredients: ["1x Violet Corn", "2x Bone Blossom", "1x Cheese"],
        cookTime: "~12 minutes",
        description: "Burger with melted cheese.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Deluxe Burger",
        ingredients: [
          "2x Violet Corn",
          "3x Bone Blossom",
          "1x Cheese",
          "1x Lettuce",
        ],
        cookTime: "~15 minutes",
        description: "The ultimate deluxe burger.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
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
    description:
      "This recipe has 2 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Hot Dog",
        ingredients: ["1x Violet Corn", "1x Bone Blossom"],
        cookTime: "~6 minutes",
        description: "A simple hot dog.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Deluxe Hot Dog",
        ingredients: ["2x Violet Corn", "2x Bone Blossom", "1x Mustard"],
        cookTime: "~8 minutes",
        description: "Deluxe hot dog with mustard.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
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
    description:
      "This recipe has 4 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Waffle",
        ingredients: ["2x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~8 minutes",
        description: "A simple sweet waffle.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Chocolate Waffle",
        ingredients: ["2x Sugar Apple", "1x Bone Blossom", "1x Cocoa"],
        cookTime: "~10 minutes",
        description: "Chocolate waffle with cocoa.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Berry Waffle",
        ingredients: ["2x Sugar Apple", "1x Bone Blossom", "2x Berry"],
        cookTime: "~9 minutes",
        description: "Waffle with fresh berries.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Deluxe Waffle",
        ingredients: [
          "3x Sugar Apple",
          "2x Bone Blossom",
          "1x Cocoa",
          "2x Berry",
        ],
        cookTime: "~12 minutes",
        description: "The ultimate deluxe waffle.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
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
    description:
      "This recipe has 6 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Pizza",
        ingredients: ["1x Tomato", "2x Bone Blossom", "1x Violet Corn"],
        cookTime: "~12 minutes",
        description: "A simple pizza with basic toppings.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Cheese Pizza",
        ingredients: [
          "1x Tomato",
          "2x Bone Blossom",
          "1x Violet Corn",
          "1x Cheese",
        ],
        cookTime: "~14 minutes",
        description: "Pizza with extra cheese.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Pepperoni Pizza",
        ingredients: [
          "1x Tomato",
          "2x Bone Blossom",
          "1x Violet Corn",
          "2x Pepperoni",
        ],
        cookTime: "~15 minutes",
        description: "Classic pepperoni pizza.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Veggie Pizza",
        ingredients: [
          "2x Tomato",
          "2x Bone Blossom",
          "1x Violet Corn",
          "1x Bell Pepper",
        ],
        cookTime: "~13 minutes",
        description: "Vegetarian pizza with fresh vegetables.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Supreme Pizza",
        ingredients: [
          "2x Tomato",
          "3x Bone Blossom",
          "1x Violet Corn",
          "1x Cheese",
          "1x Pepperoni",
        ],
        cookTime: "~16 minutes",
        description: "Supreme pizza with all toppings.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
      },
      {
        name: "Ultimate Pizza",
        ingredients: [
          "3x Tomato",
          "4x Bone Blossom",
          "2x Violet Corn",
          "2x Cheese",
          "2x Pepperoni",
          "1x Bell Pepper",
        ],
        cookTime: "~18 minutes",
        description: "The ultimate pizza with everything.",
        rarity: "LEGENDARY",
        rarityColor: "bg-orange-600",
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
    description:
      "This recipe has 3 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Pancake",
        ingredients: ["1x Sugar Apple", "1x Bone Blossom"],
        cookTime: "~7 minutes",
        description: "A simple sweet pancake.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Blueberry Pancake",
        ingredients: ["1x Sugar Apple", "1x Bone Blossom", "2x Blueberry"],
        cookTime: "~8 minutes",
        description: "Pancake with fresh blueberries.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
      },
      {
        name: "Chocolate Pancake",
        ingredients: ["1x Sugar Apple", "1x Bone Blossom", "1x Cocoa"],
        cookTime: "~9 minutes",
        description: "Chocolate pancake with cocoa powder.",
        rarity: "DIVINE",
        rarityColor: "bg-orange-500",
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
    description:
      "This recipe has 4 variants with different ingredient combinations.",
    variants: [
      {
        name: "Basic Cookie",
        ingredients: ["1x Sugar Apple", "2x Bone Blossom"],
        cookTime: "~5 minutes",
        description: "A simple sweet cookie.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Chocolate Chip Cookie",
        ingredients: ["1x Sugar Apple", "2x Bone Blossom", "1x Chocolate Chip"],
        cookTime: "~6 minutes",
        description: "Classic chocolate chip cookie.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Oatmeal Cookie",
        ingredients: ["1x Sugar Apple", "2x Bone Blossom", "1x Oat"],
        cookTime: "~7 minutes",
        description: "Healthy oatmeal cookie.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
      {
        name: "Deluxe Cookie",
        ingredients: [
          "2x Sugar Apple",
          "3x Bone Blossom",
          "1x Chocolate Chip",
          "1x Oat",
        ],
        cookTime: "~8 minutes",
        description: "The ultimate deluxe cookie.",
        rarity: "MYTHICAL",
        rarityColor: "bg-red-600",
      },
    ],
  },
];

interface RecipeDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { id } = await params;
  const recipe = pixelRecipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div
        className="min-h-screen bg-green-100"
        style={{
          backgroundImage: `
          linear-gradient(45deg, #90EE90 25%, transparent 25%), 
          linear-gradient(-45deg, #90EE90 25%, transparent 25%), 
          linear-gradient(45deg, transparent 75%, #90EE90 75%), 
          linear-gradient(-45deg, transparent 75%, #90EE90 75%)
        `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          imageRendering: "pixelated",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white border-4 border-gray-800 p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Recipe Not Found
            </h1>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 border-2 border-gray-800 font-mono hover:bg-blue-700"
            >
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-green-100"
      style={{
        backgroundImage: `
        linear-gradient(45deg, #90EE90 25%, transparent 25%), 
        linear-gradient(-45deg, #90EE90 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #90EE90 75%), 
        linear-gradient(-45deg, transparent 75%, #90EE90 75%)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        imageRendering: "pixelated",
      }}
    >
      {/* Header */}
      <div className="bg-green-800 border-b-4 border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white font-mono">
              Ψq Grow a Garden
            </h1>
            <p className="text-white font-mono text-sm">Recipe Collection</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-block bg-gray-600 text-white px-4 py-2 border-2 border-gray-800 font-mono hover:bg-gray-700"
          >
            ← Back to Recipes
          </Link>
        </div>

        {/* Main Recipe Info */}
        <div className="bg-white border-4 border-gray-800 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-900 font-mono">
              {recipe.title}
            </h2>
            <span
              className={`px-4 py-2 text-white font-mono text-sm border-2 border-gray-800 ${recipe.rarityColor}`}
            >
              {recipe.rarity}
            </span>
          </div>
          <p className="text-gray-700 font-mono text-lg">
            {recipe.description}
          </p>
        </div>

        {/* Recipe Variants */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
            Recipe Variants
          </h3>
          <div className="space-y-4">
            {recipe.variants.map((variant, index) => (
              <VariantCard key={index} variant={variant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface VariantCardProps {
  variant: {
    name: string;
    ingredients: string[];
    cookTime: string;
    description: string;
    rarity: string;
    rarityColor: string;
  };
}

function VariantCard({ variant }: VariantCardProps) {
  return (
    <div className="bg-white border-4 border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <span
              className={`px-3 py-1 text-white font-mono text-xs border-2 border-gray-800 ${variant.rarityColor}`}
            >
              {variant.rarity}
            </span>
          </div>
          <p className="text-gray-800 font-mono text-sm">
            {variant.ingredients.join(" + ")}
          </p>
        </div>
        <CopyButton ingredients={variant.ingredients} />
      </div>
    </div>
  );
}
