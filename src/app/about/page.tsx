import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Grow a Garden Recipes
          </h1>
          <p className="text-xl text-gray-600">
            Complete recipe database for Grow a Garden game
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 text-center leading-relaxed">
              At Grow a Garden Recipes, we provide the most comprehensive
              database of cooking recipes for the Grow a Garden game. Our
              mission is to help players discover every possible recipe
              combination, complete with rarity information, ingredient
              requirements, and cooking times. We're passionate about gaming,
              pixel art, and helping players master the cooking system in Grow a
              Garden.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Complete Database
              </h3>
              <p className="text-gray-600 text-sm">
                Every recipe in the Grow a Garden game with accurate rarity
                information, ingredient combinations, and cooking times.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pixel Art UI
              </h3>
              <p className="text-gray-600 text-sm">
                Beautiful pixel-art style interface that matches the game's
                aesthetic with instant search and fully responsive design.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Game Accurate
              </h3>
              <p className="text-gray-600 text-sm">
                All recipe data is verified against the actual game to ensure
                accuracy and help players achieve the best cooking results.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Grow a Garden Recipes was created to solve a common problem:
                players of the Grow a Garden game needed a comprehensive
                resource to discover all possible cooking recipes and their
                requirements. We saw an opportunity to create the ultimate
                recipe database for the game.
              </p>
              <p className="mb-4">
                What started as a simple list of recipes has grown into a
                comprehensive database with rarity information, ingredient
                combinations, cooking times, and a beautiful pixel-art
                interface. Our team of dedicated gamers and developers work
                together to ensure every recipe is accurate and up-to-date.
              </p>
              <p>
                Today, we're proud to serve the Grow a Garden community with the
                most complete and accurate recipe database available. Whether
                you're a new player learning the cooking system or a veteran
                looking for rare recipes, we're here to help you master the art
                of cooking in Grow a Garden.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Found a Missing Recipe?
                </h3>
                <p className="text-gray-600 mb-4">
                  We're always updating our database with new recipes. If you've
                  discovered a recipe that's not in our database, we'd love to
                  hear from you!
                </p>
                <a
                  href="mailto:recipes@growagardenrecipe.net"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  recipes@growagardenrecipe.net
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Questions or Feedback?
                </h3>
                <p className="text-gray-600 mb-4">
                  We value your feedback and are here to help with any questions
                  you might have about our recipe database or the Grow a Garden
                  game.
                </p>
                <a
                  href="mailto:hello@growagardenrecipe.net"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  hello@growagardenrecipe.net
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
