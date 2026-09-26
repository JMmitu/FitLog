"use client";

import { createContext, useContext, useState, useEffect } from "react";

const MAX_PLAN_SIZE = 5;
const PLAN_KEY = "fitlog_plan";
const SAVED_KEY = "fitlog_saved";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage AFTER initial mount (client-only, avoids hydration mismatch)
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_KEY);
      const storedSaved = localStorage.getItem(SAVED_KEY);
      if (storedPlan) setPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (err) {
      console.error("Failed to load FitLog data from localStorage:", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist plan changes — only after initial load, to avoid overwriting
  // storage with empty arrays before the load effect has run.
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
    } catch (err) {
      console.error("Failed to save plan to localStorage:", err);
    }
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    } catch (err) {
      console.error("Failed to save data to localStorage:", err);
    }
  }, [saved, isLoaded]);

  function addToPlan(workout) {
    if (plan.some((w) => w.id === workout.id)) {
      return "duplicate";
    }
    if (plan.length >= MAX_PLAN_SIZE) {
      return "full";
    }
    setPlan((prev) => [...prev, { ...workout, completed: false }]);
    return "added";
  }

  function addToSaved(workout) {
    if (saved.some((w) => w.id === workout.id)) {
      return "duplicate";
    }
    setSaved((prev) => [...prev, workout]);
    return "added";
  }

  function removeFromPlan(id) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  }

  function removeFromSaved(id) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  }

  function markAsDone(id) {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, completed: true } : w))
    );
  }

  const value = {
    plan,
    saved,
    isLoaded,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
