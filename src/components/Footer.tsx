import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-green-900 text-green-100 border-t-2 border-green-600 tech-glow"
      style={{ imageRendering: "pixelated" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-600 border-2 border-green-400 flex items-center justify-center tech-border">
                <span className="text-green-100 font-bold text-sm font-mono tech-text-glow">
                  G
                </span>
              </div>
              <span className="text-xl font-bold font-mono text-green-100 tech-text-glow">
                Grow a Garden Recipes
              </span>
            </Link>
            <p className="text-green-300 mb-4 max-w-md font-mono text-sm">
              Discover every Grow a Garden recipe, complete with rarity,
              ingredient combos and cook times. Pixel-art UI, instant search,
              fully responsive.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-300 hover:text-green-100 transition-colors border-2 border-transparent hover:border-green-400 p-2"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-green-300 hover:text-green-100 transition-colors border-2 border-transparent hover:border-green-400 p-2"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-green-300 hover:text-green-100 transition-colors border-2 border-transparent hover:border-green-400 p-2"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-green-300 hover:text-green-100 transition-colors border-2 border-transparent hover:border-green-400 p-2"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-green-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-green-300 hover:text-green-100 transition-colors font-mono text-sm border-2 border-transparent hover:border-green-400 px-2 py-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-300 hover:text-green-100 transition-colors font-mono text-sm border-2 border-transparent hover:border-green-400 px-2 py-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono text-green-100">
              Game Info
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-green-300 font-mono text-sm">
                  🎮 Grow a Garden
                </span>
              </li>
              <li>
                <span className="text-green-300 font-mono text-sm">
                  🍳 32+ Recipes
                </span>
              </li>
              <li>
                <span className="text-green-300 font-mono text-sm">
                  🌈 7 Rarity Levels
                </span>
              </li>
              <li>
                <span className="text-green-300 font-mono text-sm">
                  ⚡ Instant Search
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-300 font-mono text-sm">
            © 2024 Grow a Garden Recipes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
