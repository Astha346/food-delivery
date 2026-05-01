"use client";

import { useToastStore } from "@/app/store/useToastStore";

export default function Toast() {
  const toast = useToastStore((state) => state.toast);

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50">
      <p className="font-medium">{toast.title}</p>

      {toast.description && (
        <p className="text-sm text-gray-300">
          {toast.description}
        </p>
      )}
    </div>
  );
}