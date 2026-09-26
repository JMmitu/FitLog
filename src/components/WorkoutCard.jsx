import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } =
    workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="group block bg-fitlog-surface border border-fitlog-border rounded-2xl overflow-hidden hover:border-fitlog-accent/50 transition-colors"
    >
      <div className="relative w-full aspect-[4/3] bg-black">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="text-[10px] uppercase tracking-wide font-semibold text-fitlog-accent bg-fitlog-accent/10 px-2 py-0.5 rounded-full"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold text-lg uppercase leading-snug">
          {name}
        </h3>
        <p className="text-fitlog-muted text-sm mt-1">{equipment}</p>

        <div className="flex items-center gap-4 mt-4 text-sm text-fitlog-muted">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} /> {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-fitlog-accent" /> {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
