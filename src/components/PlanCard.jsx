"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";

export default function PlanCard({
  workout,
  onRemove,
  onMarkDone,
  showMarkDone = false,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-fitlog-surface border border-fitlog-border rounded-2xl p-4">
      <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-black">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold uppercase leading-snug">
            {workout.name}
            {workout.completed && (
              <span className="ml-2 text-fitlog-accent text-xs align-middle">
                ✓ Done
              </span>
            )}
          </h3>
          <button
            onClick={() => onRemove(workout.id)}
            aria-label="Remove workout"
            className="text-fitlog-muted hover:text-white flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-fitlog-muted text-sm mt-1">{workout.equipment}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-fitlog-muted">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-fitlog-accent" /> {workout.rating}
          </span>
        </div>

        <div className="flex gap-3 mt-4">
          <Link
            href={`/workouts/${workout.id}`}
            className="text-sm font-semibold border border-fitlog-border px-4 py-1.5 rounded-full hover:border-fitlog-accent/50 transition-colors"
          >
            View Details
          </Link>
          {showMarkDone && !workout.completed && (
            <button
              onClick={() => onMarkDone(workout.id)}
              className="flex items-center gap-1.5 text-sm font-semibold bg-fitlog-accent text-black px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Check size={14} /> Mark as Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
