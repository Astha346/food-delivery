import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;

  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;

  openCart: () => void;
  closeCart: () => void;

  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,

  // 🟢 OPEN CART
  openCart: () => set({ isOpen: true }),

  // 🔴 CLOSE CART
  closeCart: () => set({ isOpen: false }),

  // ➕ ADD ITEM
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, qty: 1 }],
      };
    }),

  // ❌ REMOVE ITEM
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  // ➕ QTY +
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  // ➖ QTY -
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0),
    })),

  // 🧹 CLEAR CART
  clearCart: () => set({ items: [] }),
}));