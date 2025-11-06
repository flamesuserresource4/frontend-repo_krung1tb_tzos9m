import React, { useEffect, useState } from 'react';
import { Trophy, Medal } from 'lucide-react';

const mockLeaders = [
  { name: 'Alya', score: 180, level: 5 },
  { name: 'Raka', score: 160, level: 4 },
  { name: 'Siti', score: 150, level: 4 },
  { name: 'Bima', score: 120, level: 3 },
];

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // In real app, fetch from backend. Here we mock for UI.
    setLeaders(mockLeaders);
  }, []);

  return (
    <section id="leaderboard" className="mx-auto max-w-5xl px-6 py-14">
      <div className="flex items-center gap-3">
        <Trophy className="h-6 w-6 text-amber-300" />
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Leaderboard</h2>
      </div>
      <p className="mt-2 text-indigo-200">Peringkat siswa berdasarkan skor total.</p>

      <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur">
        {leaders.map((u, i) => (
          <div key={u.name} className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-indigo-900 font-bold">
                {i + 1}
              </div>
              <div>
                <div className="font-semibold">{u.name}</div>
                <div className="text-xs text-indigo-200">Level {u.level}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <Medal className="h-5 w-5" />
              <span className="font-semibold">{u.score} pts</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
