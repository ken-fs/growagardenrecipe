import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">Grow A Garden Recipe</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover delicious recipes using fresh ingredients from your
              garden. From vegetables to herbs, find the perfect recipe for your
              homegrown produce.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/vegetables"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/herbs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Herbs
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fruits"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/salads"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Salads
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Grow A Garden Recipe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
