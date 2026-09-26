import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = params;

  let workout;
  try {
    workout = await getWorkoutById(id);
  } catch (err) {
    notFound();
  }

  if (!workout) {
    notFound();
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    description,
    instructions,
  } = workout;

  const specs = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: `${duration} min` },
    { label: "Calories", value: `${caloriesBurned} kcal` },
    { label: "Rating", value: rating },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-fitlog-surface border border-fitlog-border">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="text-[10px] uppercase tracking-wide font-semibold text-fitlog-accent bg-fitlog-accent/10 px-2 py-0.5 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold uppercase text-3xl sm:text-4xl tracking-tight">
            {name}
          </h1>

          <p className="mt-4 text-fitlog-muted">{description}</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5 bg-fitlog-surface border border-fitlog-border rounded-2xl p-4 sm:p-5">
            {specs.map((spec) => (
              <div key={spec.label}>
                <p className="text-[10px] uppercase tracking-wide text-fitlog-muted">
                  {spec.label}
                </p>
                <p className="font-semibold mt-1">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-6 text-sm text-fitlog-muted">
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

          <WorkoutActions workout={workout} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display font-bold uppercase text-xl tracking-tight mb-4">
          Instructions
        </h2>
        <ol className="space-y-3 max-w-2xl">
          {instructions.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-fitlog-accent text-black text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-fitlog-muted">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
