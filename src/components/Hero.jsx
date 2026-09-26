"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToLibrary = () => {
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-fitlog-accent text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display font-extrabold uppercase leading-[1.05] text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-6 text-fitlog-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            onClick={scrollToLibrary}
            className="mt-8 inline-flex items-center gap-2 bg-fitlog-accent text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Browse Workouts
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex-1 w-full">
          <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-fitlog-surface border border-fitlog-border">
            <Image
              src="/assets/banner.png"
              alt="FitLog workout banner"
              width={800}
              height={800}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
