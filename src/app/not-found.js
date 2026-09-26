export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#ccff00] font-bold tracking-widest mb-4">
          404 ERROR
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-4">
          PAGE NOT FOUND
        </h1>

        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="inline-flex items-center rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:opacity-80"
        >
          BACK TO WORKOUTS
        </a>
      </div>
    </main>
  );
}