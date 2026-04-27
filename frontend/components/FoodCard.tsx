"use client";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  type?: "veg" | "non-veg";
};

export default function FoodCard({ name, price, image, type }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col">

      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-36 w-full object-cover"
        />

        {/* VEG / NON-VEG BADGE */}
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

      {/* Content */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h2 className="font-semibold text-gray-800">{name}</h2>

        <p className="text-gray-500 text-sm">Rs {price}</p>

        {/* Button */}
        <button className="mt-auto bg-orange-500 text-white py-1.5 rounded-lg text-sm hover:bg-orange-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}