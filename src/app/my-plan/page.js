"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import SortDropdown from "@/components/SortDropdown";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    isLoaded,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce(
    (sum, workout) => sum + (Number(workout.duration) || 0),
    0
  );

  const totalCalories = plan.reduce(
    (sum, workout) => sum + (Number(workout.caloriesBurned) || 0),
    0
  );

  const metrics = [
    {
      label: "Exercises",
      value: plan.length,
    },
    {
      label: "Minutes",
      value: totalMinutes,
    },
    {
      label: "Calories",
      value: totalCalories,
    },
  ];

  function handleRemoveFromPlan(id) {
    removeFromPlan(id);
    showToast("Workout removed");
  }

  function handleRemoveFromSaved(id) {
    removeFromSaved(id);
    showToast("Workout removed");
  }

  function handleMarkDone(id) {
    markAsDone(id);
    showToast("Workout marked as done");
  }

  // Get the currently active list
  const currentWorkouts = activeTab === "plan" ? plan : saved;

  // Sort without changing the original plan/saved state
  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    const first = Number(a[sortBy]) || 0;
    const second = Number(b[sortBy]) || 0;

    return second - first;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <h1 className="font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
        My Plan
      </h1>

      <p className="mt-2 text-fitlog-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-fitlog-border bg-fitlog-surface p-4 text-center sm:p-6"
          >
            <p className="font-display text-2xl font-extrabold text-fitlog-accent sm:text-3xl">
              {metric.value}
            </p>

            <p className="mt-1 text-xs uppercase tracking-wide text-fitlog-muted sm:text-sm">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-10 flex gap-6 border-b border-fitlog-border">
        <button
          onClick={() => setActiveTab("plan")}
          className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${
            activeTab === "plan"
              ? "border-fitlog-accent text-fitlog-accent"
              : "border-transparent text-fitlog-muted hover:text-white"
          }`}
        >
          Today&apos;s Plan ({plan.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${
            activeTab === "saved"
              ? "border-fitlog-accent text-fitlog-accent"
              : "border-transparent text-fitlog-muted hover:text-white"
          }`}
        >
          Saved ({saved.length})
        </button>
      </div>

      {/* Loading */}
      {!isLoaded ? (
        <div className="py-16 text-center">
          <p className="text-fitlog-muted">Loading workouts…</p>
        </div>
      ) : (
        <>
          {/* Sort */}
          {currentWorkouts.length > 0 && (
            <div className="mt-6 flex justify-end">
              <SortDropdown
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
          )}

          {/* Workout List */}
          <div className="mt-6 space-y-4">
            {activeTab === "plan" &&
              (plan.length === 0 ? (
                <EmptyState />
              ) : (
                sortedWorkouts.map((workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    onRemove={handleRemoveFromPlan}
                    onMarkDone={handleMarkDone}
                    showMarkDone
                  />
                ))
              ))}

            {activeTab === "saved" &&
              (saved.length === 0 ? (
                <EmptyState />
              ) : (
                sortedWorkouts.map((workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    onRemove={handleRemoveFromSaved}
                  />
                ))
              ))}
          </div>
        </>
      )}
    </div>
  );
}