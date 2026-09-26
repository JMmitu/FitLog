"use client";

import { Plus, Bookmark, Check } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function WorkoutActions({ workout }) {
  const { plan, saved, addToPlan, addToSaved } = usePlan();
  const { showToast } = useToast();

  const isInPlan = plan.some((w) => w.id === workout.id);
  const isSaved = saved.some((w) => w.id === workout.id);
  const isPlanFull = plan.length >= 5 && !isInPlan;

  function handleAddToPlan() {
    const result = addToPlan(workout);
    if (result === "added") showToast("Added to today's plan");
    if (result === "duplicate") showToast("Already in today's plan");
    if (result === "full") showToast("Today's plan is full");
  }

  function handleSave() {
    const result = addToSaved(workout);
    if (result === "added") showToast("Saved for later");
    if (result === "duplicate") showToast("Already saved");
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      <button
        onClick={handleAddToPlan}
        disabled={isPlanFull}
        className="flex items-center justify-center gap-2 bg-fitlog-accent text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isInPlan ? <Check size={18} /> : <Plus size={18} />}
        {isInPlan ? "In Today's Plan" : "Add to Today's Plan"}
      </button>
      <button
        onClick={handleSave}
        className="flex items-center justify-center gap-2 border border-fitlog-border px-6 py-3 rounded-full hover:border-fitlog-accent/50 transition-colors"
      >
        {isSaved ? <Check size={18} /> : <Bookmark size={18} />}
        {isSaved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
}
