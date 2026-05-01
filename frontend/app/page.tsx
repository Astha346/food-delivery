"use client";

import { useEffect, useState } from "react";
import FoodCard from "@/components/FoodCard";
import TabNavbar from "@/components/navbar/TabNavbar";
import { getFoods } from "@/lib/api";
import CartDrawer from "@/components/CartDrawer";

type Food = {
  id: number;
  name: string;
  price: number;
  image: string;
  type?: "veg" | "non-veg";
  category: string;
};

export default function HomePage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selected, setSelected] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadFoods() {
      const data = await getFoods(selected, search);
      setFoods(data);
    }

    loadFoods();
  }, [selected, search]);

  return (
    <div>
      {/* SEARCH BAR */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {/* CATEGORY TABS */}
      <TabNavbar selected={selected} onSelect={setSelected} />

      {/* FOOD GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            type={food.type}
          />
        ))}
      </div>
      <CartDrawer />
    </div>
  );
}