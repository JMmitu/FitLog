import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        id="library"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="mb-8 text-center sm:text-left">
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl tracking-tight">
            The Library
          </h2>
          <p className="mt-2 text-fitlog-muted">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <WorkoutGrid />
      </section>
    </>
  );
}
