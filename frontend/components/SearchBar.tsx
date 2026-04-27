"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="p-3 flex justify-center">
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search food..."
    className="w-full max-w-md border px-4 py-2 rounded-lg"
  />
</div>
  );
}