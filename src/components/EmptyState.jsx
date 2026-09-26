import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="text-center py-16 border border-dashed border-fitlog-border rounded-2xl">
      <h3 className="font-display font-bold uppercase text-lg tracking-tight">
        Nothing Here Yet
      </h3>
      <p className="text-fitlog-muted mt-2 max-w-sm mx-auto">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="inline-block mt-6 bg-fitlog-accent text-black font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
      >
        Go to workouts
      </Link>
    </div>
  );
}
