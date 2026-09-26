import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="font-display font-extrabold text-fitlog-accent text-6xl sm:text-8xl tracking-tight">
        404
      </p>
      <h1 className="font-display font-extrabold uppercase text-2xl sm:text-3xl tracking-tight mt-4">
        Workout Not Found
      </h1>
      <p className="text-fitlog-muted mt-3 max-w-sm">
        This lift doesn&apos;t exist in the library, or the link is broken.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mt-8 bg-fitlog-accent text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
      >
        <ArrowLeft size={18} />
        Back to Workouts
      </Link>
    </div>
  );
}
