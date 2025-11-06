import React from 'react';
import { Calculator, Book, Languages, Palette } from 'lucide-react';

const subjects = [
  { key: 'math', name: 'Matematika', icon: Calculator, color: 'from-cyan-500 to-blue-500' },
  { key: 'english', name: 'Bahasa Inggris', icon: Languages, color: 'from-emerald-500 to-teal-500' },
  { key: 'indonesian', name: 'Bahasa Indonesia', icon: Book, color: 'from-rose-500 to-pink-500' },
  { key: 'art', name: 'Seni', icon: Palette, color: 'from-amber-500 to-orange-500' },
];

export default function SubjectGrid({ onSelect }) {
  return (
    <section id="subjects" className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Pilih Mata Pelajaran</h2>
      <p className="mt-2 text-indigo-200">Kerjakan kuis bertema luar angkasa dan kumpulkan poin.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((s) => (
          <button
            key={s.key}
            onClick={() => onSelect?.(s.key)}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} p-5 text-left text-white shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-white/90">Level adaptif dan badge</div>
              </div>
              <s.icon className="h-10 w-10 opacity-90 transition group-hover:rotate-6" />
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          </button>
        ))}
      </div>
    </section>
  );
}
