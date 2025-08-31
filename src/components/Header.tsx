"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="bg-white border-b-2 border-gray-800"
      style={{ imageRendering: "pixelated" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 border-2 border-gray-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900 font-mono">
              Grow a Garden Recipes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-800 px-3 py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-800 px-3 py-1"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 border-2 border-gray-800 bg-gray-100 hover:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ imageRendering: "pixelated" }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-800" />
            ) : (
              <Menu className="h-5 w-5 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-gray-800 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-mono text-sm border-2 border-transparent hover:border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
