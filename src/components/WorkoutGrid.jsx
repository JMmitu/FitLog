export default function WorkoutGrid() {
  return (
    <section
      id="library"
      className="min-h-screen bg-[#0a0a0a] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
          WORKOUT LIBRARY
        </p>

        <h2 className="mt-3 text-4xl font-black md:text-6xl">
          THE LIBRARY
        </h2>

        <p className="mt-4 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-bold">Loading workouts...</h3>
          </div>
        </div>
      </div>
    </section>
  );
}