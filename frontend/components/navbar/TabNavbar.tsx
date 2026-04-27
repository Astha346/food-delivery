"use client";
import { useEffect, useRef } from "react";

const tabs = ["all", "breakfast", "soups", "pasta", "maincourse", "pizza", "burger"];

type Props = {
  selected: string;
  onSelect: (tab: string) => void;
};

export default function TabNavbar({ selected, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeTab = tabRefs.current[selected];
    if (activeTab && containerRef.current) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selected]);

  return (
    <div
      ref={containerRef}
      className="w-full border-b bg-white px-4 py-2 flex gap-3 overflow-x-auto"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          ref={(el) => {
            tabRefs.current[tab] = el;
          }}
          onClick={() => onSelect(tab)}
          className={`px-4 py-1 rounded-full text-sm whitespace-nowrap transition
            ${
              selected === tab
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-orange-100"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}