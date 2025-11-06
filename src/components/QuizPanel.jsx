import React, { useEffect, useMemo, useState } from 'react';
import { Star, TimerReset, Send } from 'lucide-react';

const sampleQuestions = {
  math: [
    { id: 'm1', q: 'Hasil dari 12 × 8 adalah ...', options: ['80', '88', '96', '108'], answer: 2, points: 10 },
    { id: 'm2', q: 'Keliling persegi dengan sisi 7 cm adalah ...', options: ['14 cm', '28 cm', '35 cm', '49 cm'], answer: 1, points: 10 },
  ],
  english: [
    { id: 'e1', q: 'Choose the correct form: She ____ to school every day.', options: ['go', 'goes', 'going', 'gone'], answer: 1, points: 10 },
    { id: 'e2', q: 'Synonym of "happy" is ...', options: ['sad', 'angry', 'glad', 'tired'], answer: 2, points: 10 },
  ],
  indonesian: [
    { id: 'i1', q: 'Antonim dari "besar" adalah ...', options: ['kecil', 'tinggi', 'luas', 'panjang'], answer: 0, points: 10 },
    { id: 'i2', q: 'Tanda baca untuk mengakhiri kalimat pernyataan adalah ...', options: ['?', '!', ',', '.'], answer: 3, points: 10 },
  ],
  art: [
    { id: 'a1', q: 'Campuran warna merah dan biru menghasilkan ...', options: ['hijau', 'ungu', 'oranye', 'cokelat'], answer: 1, points: 10 },
    { id: 'a2', q: 'Tekstur yang terasa halus disebut ...', options: ['kasar', 'halus', 'padat', 'keras'], answer: 1, points: 10 },
  ],
};

export default function QuizPanel({ subject, onFinish }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());

  const questions = useMemo(() => sampleQuestions[subject] ?? [], [subject]);

  useEffect(() => {
    setIndex(0);
    setSelected(null);
    setScore(0);
  }, [subject]);

  if (!subject) return null;

  const current = questions[index];
  const progress = Math.round(((index) / questions.length) * 100);
  const elapsed = Math.max(0, Math.floor((Date.now() - startTime) / 1000));

  const submit = () => {
    if (selected === null) return;
    if (selected === current.answer) {
      setScore((s) => s + (current.points || 10));
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      onFinish?.({ score, total: questions.reduce((a, b) => a + (b.points || 10), 0), time: elapsed, subject });
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-indigo-200">Progres: {progress}%</div>
        <div className="flex items-center gap-2 text-amber-300"><TimerReset className="h-4 w-4" /> {elapsed}s</div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur">
        <div className="text-xs uppercase tracking-wide text-indigo-200">Soal {index + 1} / {questions.length}</div>
        <h3 className="mt-2 text-xl font-semibold">{current.q}</h3>

        <div className="mt-4 grid grid-cols-1 gap-3">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`rounded-xl border px-4 py-3 text-left transition ${
                selected === i ? 'border-amber-400 bg-amber-400/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-300">
            <Star className="h-5 w-5" />
            <span className="font-semibold">Skor: {score}</span>
          </div>
          <button onClick={submit} className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-indigo-900 shadow-md transition hover:scale-[1.02]">
            {index + 1 === questions.length ? 'Selesai' : 'Jawab'}
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
