import React, { useState } from 'react';
import Hero from './components/Hero';
import SubjectGrid from './components/SubjectGrid';
import QuizPanel from './components/QuizPanel';
import Leaderboard from './components/Leaderboard';

export default function App() {
  const [subject, setSubject] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleFinish = (data) => {
    setSummary(data);
    setSubject(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-950 via-indigo-900 to-violet-950 font-inter">
      <Hero />

      {subject ? (
        <QuizPanel subject={subject} onFinish={handleFinish} />
      ) : (
        <>
          <SubjectGrid onSelect={setSubject} />
          {summary && (
            <div className="mx-auto max-w-4xl px-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur">
                <h3 className="text-xl font-bold">Ringkasan Hasil</h3>
                <p className="mt-2 text-indigo-200">Mata pelajaran: <span className="font-medium text-white">{summary.subject}</span></p>
                <p className="text-indigo-200">Skor: <span className="font-medium text-amber-300">{summary.score}/{summary.total}</span> • Waktu: {summary.time}s</p>
              </div>
            </div>
          )}
          <Leaderboard />
        </>
      )}

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-indigo-300">
        © {new Date().getFullYear()} Eduverse • Belajar jadi petualangan.
      </footer>
    </div>
  );
}
