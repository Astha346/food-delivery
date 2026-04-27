"use client";

import { ShoppingBag, Utensils, MapPin } from "lucide-react";
import { useState } from "react";

export default function TopNavbar() {
  const cartCount = 2;

  const [type, setType] = useState("all"); // veg / non-veg / all

  return (
    <div className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: Logo + Location */}
        <div className="flex items-center gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Utensils className="text-orange-500" />
            <h1 className="text-lg font-semibold">FoodServe</h1>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Kathmandu</span>
          </div>
        </div>

        {/* CENTER: Filters */}
        <div className="hidden md:flex items-center gap-2">

          <button
            onClick={() => setType("all")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "all"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setType("veg")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "veg"
                ? "bg-green-500 text-white"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            Veg
          </button>

          <button
            onClick={() => setType("non-veg")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "non-veg"
                ? "bg-red-500 text-white"
                : "bg-red-100 hover:bg-red-200"
            }`}
          >
            Non-Veg
          </button>
        </div>

        {/* RIGHT: Cart */}
        <div className="relative cursor-pointer hover:scale-105 transition">
          <ShoppingBag className="w-6 h-6" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}