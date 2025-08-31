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
            About Grow A Garden Recipe
          </h1>
          <p className="text-xl text-gray-600">
            Connecting garden enthusiasts with delicious, fresh recipes
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
              At Grow A Garden Recipe, we believe that the best meals start with
              the freshest ingredients. Our mission is to inspire and empower
              home gardeners to create delicious, nutritious meals using the
              fruits, vegetables, and herbs they grow in their own gardens.
              We're passionate about sustainable living, healthy eating, and the
              joy that comes from growing your own food.
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
                Fresh & Healthy
              </h3>
              <p className="text-gray-600 text-sm">
                Every recipe is designed to highlight the natural flavors and
                nutritional benefits of fresh garden produce.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600 text-sm">
                Our recipes come from a community of passionate gardeners and
                home cooks who love sharing their knowledge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality First
              </h3>
              <p className="text-gray-600 text-sm">
                We carefully curate and test every recipe to ensure it meets our
                high standards for taste and nutrition.
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
                Grow A Garden Recipe was born from a simple observation: many
                home gardeners grow beautiful, fresh produce but struggle to
                find creative and delicious ways to use their harvest. We saw an
                opportunity to bridge the gap between growing food and cooking
                with it.
              </p>
              <p className="mb-4">
                What started as a small collection of family recipes has grown
                into a comprehensive resource for garden-to-table cooking. Our
                team of experienced gardeners, chefs, and food enthusiasts work
                together to create recipes that celebrate the natural flavors of
                homegrown ingredients.
              </p>
              <p>
                Today, we're proud to serve a growing community of gardeners,
                home cooks, and anyone who appreciates the connection between
                fresh ingredients and great food. Whether you're a seasoned
                gardener or just starting your first herb garden, we're here to
                help you make the most of your harvest.
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
                  Have a Recipe to Share?
                </h3>
                <p className="text-gray-600 mb-4">
                  We're always looking for new recipes from our community. If
                  you have a favorite garden recipe you'd like to share, we'd
                  love to hear from you!
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
                  you might have about our recipes or gardening tips.
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
