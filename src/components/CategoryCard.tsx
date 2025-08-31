import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-bold mb-1">
              {category.name}
            </h3>
            <p className="text-white text-sm opacity-90 mb-2">
              {category.description}
            </p>
            <div className="text-white text-sm font-medium">
              {category.recipeCount} recipes
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
