"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="tech-gradient border-b-2 tech-border tech-glow"
      style={{ imageRendering: "pixelated" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 border-2 border-green-400 flex items-center justify-center tech-border">
              <span className="text-green-100 font-bold text-sm font-mono tech-text-glow">
                G
              </span>
            </div>
            <span className="text-xl font-bold game-text font-mono tech-text-glow">
              Grow a Garden Recipes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-green-200 hover:text-green-400 transition-all font-mono text-sm border-2 border-transparent hover:border-green-400 hover:tech-glow-sm px-3 py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-green-200 hover:text-green-400 transition-all font-mono text-sm border-2 border-transparent hover:border-green-400 hover:tech-glow-sm px-3 py-1"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 tech-border bg-green-800 hover:bg-green-700 hover:tech-glow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ imageRendering: "pixelated" }}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-green-100" />
            ) : (
              <Menu className="h-5 w-5 text-green-100" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-green-500 tech-gradient">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-green-200 hover:text-green-400 transition-all font-mono text-sm border-2 border-transparent hover:border-green-400 hover:tech-glow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-green-200 hover:text-green-400 transition-all font-mono text-sm border-2 border-transparent hover:border-green-400 hover:tech-glow-sm"
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
