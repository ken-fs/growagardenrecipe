import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-900 text-white border-t-2 border-gray-800"
      style={{ imageRendering: "pixelated" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 border-2 border-gray-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">
                  G
                </span>
              </div>
              <span className="text-xl font-bold font-mono">
                Grow a Garden Recipes
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md font-mono text-sm">
              Discover every Grow a Garden recipe, complete with rarity,
              ingredient combos and cook times. Pixel-art UI, instant search,
              fully responsive.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors border-2 border-transparent hover:border-gray-600 p-2"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors border-2 border-transparent hover:border-gray-600 p-2"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors border-2 border-transparent hover:border-gray-600 p-2"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors border-2 border-transparent hover:border-gray-600 p-2"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/vegetables"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Vegetables
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/herbs"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Herbs
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fruits"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Fruits
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/salads"
                  className="text-gray-400 hover:text-white transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-600 px-2 py-1 inline-block"
                >
                  Salads
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 Grow a Garden Recipes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
