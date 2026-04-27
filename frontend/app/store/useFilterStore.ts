import { create } from "zustand";

type FilterStore = {
  category: string;
  type: string;
  setCategory: (cat: string) => void;
  setType: (type: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  category: "All",
  type: "all",

  setCategory: (cat) => set({ category: cat }),
  setType: (type) => set({ type }),
}));