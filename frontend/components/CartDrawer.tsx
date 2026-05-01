"use client";

import { useCartStore } from "@/app/store/useCartStore";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCartStore();

  if (!isOpen) return null; // 👈 THIS controls visibility

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end z-50">

      {/* CART PANEL */}
      <div className="w-80 bg-white h-full p-4 shadow-lg">

        {/* CLOSE BUTTON */}
        <button onClick={closeCart} className="mb-3">
          ✕ Close
        </button>

        <h2 className="text-lg font-semibold mb-4">
          Your Cart
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="border p-2 rounded">

                <p className="font-medium">{item.name}</p>

                <p className="text-sm text-gray-500">
                  Rs {item.price * item.qty}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => decreaseQty(item.id)}>
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => increaseQty(item.id)}>
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 ml-auto"
                  >
                    remove
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        <div className="mt-4 border-t pt-3 font-bold">
          Total: Rs {total}
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-3 w-full bg-red-500 text-white py-2"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}