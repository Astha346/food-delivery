import { create } from "zustand";

type Toast = {
  title: string;
  description?: string;
};

type ToastStore = {
  toast: Toast | null;
  showToast: (t: Toast) => void;
  hideToast: () => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  toast: null,

  showToast: (t) => {
    set({ toast: t });

    setTimeout(() => {
      set({ toast: null });
    }, 2000);
  },

  hideToast: () => set({ toast: null }),
}));