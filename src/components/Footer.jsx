export default function Footer() {
  return (
    <footer className="border-t border-fitlog-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-fitlog-muted">
        <span className="font-display font-bold text-white">
          Fit<span className="text-fitlog-accent">Log</span>
        </span>
        <span>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
      </div>
    </footer>
  );
}
