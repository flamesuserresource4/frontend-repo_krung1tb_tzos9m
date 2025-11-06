import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-800 to-violet-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-indigo-900/50 to-violet-900/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-24 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-amber-300" />
          <span className="font-medium">Eduverse • Belajar Seru Bertema Luar Angkasa</span>
        </div>
        <h1 className="mt-6 bg-gradient-to-r from-amber-200 via-white to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Kuis Interaktif SMP: Matematika, Bahasa, & Seni
        </h1>
        <p className="mt-4 max-w-3xl text-base text-indigo-100 sm:text-lg">
          Kumpulkan poin, naikkan level, dan raih badge. Belajar offline ringan, leaderboard, dan laporan progres untuk guru.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#subjects"
            className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-indigo-900 shadow-lg shadow-amber-400/30 transition hover:scale-[1.02] hover:bg-amber-300"
          >
            Mulai Jelajah
          </a>
          <a
            href="#leaderboard"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/20"
          >
            Lihat Peringkat
          </a>
        </div>
      </div>
    </section>
  );
}
