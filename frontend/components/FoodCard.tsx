"use client";

import { useCartStore } from "@/app/store/useCartStore";
import { useToastStore } from "@/app/store/useToastStore";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  type?: "veg" | "non-veg";
};

export default function FoodCard({
  id,
  name,
  price,
  image,
  type,
}: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const showToast = useToastStore((state) => state.showToast);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-36 w-full object-cover"
        />

        {type && (
          <span
            className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded border
              ${
                type === "veg"
                  ? "bg-green-100 text-green-700 border-green-500"
                  : "bg-red-100 text-red-700 border-red-500"
              }
            `}
          >
            {type === "veg" ? "VEG" : "NON-VEG"}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h2 className="font-semibold text-gray-800">{name}</h2>

        <p className="text-gray-500 text-sm">Rs {price}</p>

        <button
          onClick={() => {
            const exists = items.find((i) => i.id === id);

            addItem({ id, name, price, image });

            showToast({
              title: exists ? "Quantity updated 🔁" : "Added to cart 🛒",
              description: name,
            });
          }}
          className="mt-auto bg-orange-500 text-white py-1.5 rounded-lg text-sm hover:bg-orange-600 active:scale-95 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}