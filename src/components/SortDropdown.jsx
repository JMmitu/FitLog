"use client";

import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative inline-block">
      <label htmlFor="sort-by" className="sr-only">
        Sort By
      </label>
      <select
        id="sort-by"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-fitlog-surface border border-fitlog-border text-sm rounded-full pl-4 pr-9 py-2 cursor-pointer focus:outline-none focus:border-fitlog-accent"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            Sort By: {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-fitlog-muted"
      />
    </div>
  );
}
