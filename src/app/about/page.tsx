import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen game-bg"
      style={{
        backgroundImage: `
        linear-gradient(45deg, #1a3d2e 25%, transparent 25%), 
        linear-gradient(-45deg, #1a3d2e 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #1a3d2e 75%), 
        linear-gradient(-45deg, transparent 75%, #1a3d2e 75%)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        imageRendering: "pixelated",
      }}
    >
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold game-text mb-4 font-mono tech-text-glow">
            About Grow a Garden Recipes
          </h1>
          <p className="text-xl text-green-200 font-mono">
            Complete recipe database for Grow a Garden game
          </p>
        </div>

        {/* Mission Section */}
        <div className="tech-gradient border-4 p-8 mb-8 tech-border tech-glow">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 tech-border">
              <Leaf className="h-8 w-8 text-green-300 tech-text-glow" />
            </div>
            <h2 className="text-2xl font-bold game-text mb-4 font-mono tech-text-glow">
              Our Mission
            </h2>
          </div>
          <p className="text-lg text-green-100 text-center leading-relaxed font-mono">
            At Grow a Garden Recipes, we provide the most comprehensive database
            of cooking recipes for the Grow a Garden game. Our mission is to
            help players discover every possible recipe combination, complete
            with rarity information, ingredient requirements, and cooking times.
            We&apos;re passionate about gaming, pixel art, and helping players
            master the cooking system in Grow a Garden.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="tech-gradient border-4 p-6 text-center tech-border hover:tech-glow-sm transition-all">
            <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 tech-border">
              <Heart className="h-6 w-6 text-green-300 tech-text-glow" />
            </div>
            <h3 className="text-lg font-semibold game-text mb-2 font-mono tech-text-glow">
              Complete Database
            </h3>
            <p className="text-green-100 text-sm font-mono">
              Every recipe in the Grow a Garden game with accurate rarity
              information, ingredient combinations, and cooking times.
            </p>
          </div>

          <div className="tech-gradient border-4 p-6 text-center tech-border hover:tech-glow-sm transition-all">
            <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 tech-border">
              <Users className="h-6 w-6 text-green-300 tech-text-glow" />
            </div>
            <h3 className="text-lg font-semibold game-text mb-2 font-mono tech-text-glow">
              Pixel Art UI
            </h3>
            <p className="text-green-100 text-sm font-mono">
              Beautiful pixel-art style interface that matches the game&apos;s
              aesthetic with instant search and fully responsive design.
            </p>
          </div>

          <div className="tech-gradient border-4 p-6 text-center tech-border hover:tech-glow-sm transition-all">
            <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 tech-border">
              <Award className="h-6 w-6 text-green-300 tech-text-glow" />
            </div>
            <h3 className="text-lg font-semibold game-text mb-2 font-mono tech-text-glow">
              Game Accurate
            </h3>
            <p className="text-green-100 text-sm font-mono">
              All recipe data is verified against the actual game to ensure
              accuracy and help players achieve the best cooking results.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="tech-gradient border-4 p-8 mb-8 tech-border tech-glow">
          <h2 className="text-2xl font-bold game-text mb-6 font-mono tech-text-glow">
            Our Story
          </h2>
          <div className="prose prose-lg text-green-100 font-mono">
            <p className="mb-4">
              Grow a Garden Recipes was created to solve a common problem:
              players of the Grow a Garden game needed a comprehensive resource
              to discover all possible cooking recipes and their requirements.
              We saw an opportunity to create the ultimate recipe database for
              the game.
            </p>
            <p className="mb-4">
              What started as a simple list of recipes has grown into a
              comprehensive database with rarity information, ingredient
              combinations, cooking times, and a beautiful pixel-art interface.
              Our team of dedicated gamers and developers work together to
              ensure every recipe is accurate and up-to-date.
            </p>
            <p>
              Today, we&apos;re proud to serve the Grow a Garden community with
              the most complete and accurate recipe database available. Whether
              you&apos;re a new player learning the cooking system or a veteran
              looking for rare recipes, we&apos;re here to help you master the
              art of cooking in Grow a Garden.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="tech-gradient border-4 p-8 tech-border tech-glow">
          <h2 className="text-2xl font-bold game-text mb-6 font-mono tech-text-glow">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold game-text mb-3 font-mono tech-text-glow">
                Found a Missing Recipe?
              </h3>
              <p className="text-green-100 mb-4 font-mono">
                We&apos;re always updating our database with new recipes. If
                you&apos;ve discovered a recipe that&apos;s not in our database,
                we&apos;d love to hear from you!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold game-text mb-3 font-mono tech-text-glow">
                Questions or Feedback?
              </h3>
              <p className="text-green-100 mb-4 font-mono">
                We value your feedback and are here to help with any questions
                you might have about our recipe database or the Grow a Garden
                game.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
