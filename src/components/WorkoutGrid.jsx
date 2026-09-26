"use client";

import { useEffect, useState } from "react";
import { getAllWorkouts } from "@/lib/api";
import LoadingSpinner from "./LoadingSpinner";
import WorkoutCard from "./WorkoutCard";


export default function WorkoutGrid() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await getAllWorkouts();
        if (!cancelled) {
          setWorkouts(data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <p className="text-center text-fitlog-muted py-20">
        Couldn&apos;t load workouts. Please try again later.
      </p>
    );
  }

  // Build a new sorted array — never mutate the original `workouts` state
  const sortedWorkouts = [...workouts].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
