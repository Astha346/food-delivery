"use client";

import { ShoppingBag, Utensils, MapPin } from "lucide-react";
import { useCartStore } from "@/app/store/useCartStore";
import { useFilterStore } from "@/app/store/useFilterStore";

export default function TopNavbar() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.qty, 0)
  );

  const openCart = useCartStore((state) => state.openCart);

  const { type, setType } = useFilterStore();

  return (
    <div className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Utensils className="text-orange-500" />
            <h1 className="text-lg font-semibold">FoodServe</h1>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Kathmandu</span>
          </div>
        </div>

        {/* CENTER FILTER */}
        <div className="hidden md:flex items-center gap-2">

          <button
            onClick={() => setType("all")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "all"
                ? "bg-gray-800 text-white"
                : "bg-gray-100"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setType("veg")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "veg"
                ? "bg-green-500 text-white"
                : "bg-green-100"
            }`}
          >
            Veg
          </button>

          <button
            onClick={() => setType("non-veg")}
            className={`px-3 py-1 rounded-full text-sm ${
              type === "non-veg"
                ? "bg-red-500 text-white"
                : "bg-red-100"
            }`}
          >
            Non-Veg
          </button>
        </div>

        {/* CART */}
        <div className="relative">
          <button onClick={openCart}>
            <ShoppingBag className="w-6 h-6 cursor-pointer" />
          </button>

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