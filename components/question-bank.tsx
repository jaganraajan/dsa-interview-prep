'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { QUESTIONS, WEEK_NAMES } from '@/lib/questions';

export default function QuestionBank() {
  const [query, setQuery] = useState('');
  const [week, setWeek] = useState('ALL');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return QUESTIONS.filter((item) => {
      const matchesWeek = week === 'ALL' || item.week === week;
      const matchesText =
        !needle ||
        item.title.toLowerCase().includes(needle) ||
        item.week.toLowerCase().includes(needle);
      return matchesWeek && matchesText;
    });
  }, [query, week]);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <main className="page">
      <div className="topbar">
        <div>
          <h1>Python Solutions: FAANG LeetCode List</h1>
          <p className="helper">
            Main page contains Python-only answers for the exact extracted list.
          </p>
        </div>
        <div className="badges">
          <span className="badge">Questions: {QUESTIONS.length}</span>
          <span className="badge">Language: Python only</span>
          <Link className="badge" href="/playground">
            Open Playground
          </Link>
        </div>
      </div>

      <div className="controls">
        <input
          placeholder="Search by title..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <select value={week} onChange={(event) => setWeek(event.target.value)}>
          <option value="ALL">All Weeks</option>
          {WEEK_NAMES.map((weekName) => (
            <option key={weekName} value={weekName}>
              {weekName}
            </option>
          ))}
        </select>

        <button
          className="secondary"
          type="button"
          onClick={() => {
            setQuery('');
            setWeek('ALL');
            setExpanded(new Set());
          }}
        >
          Reset
        </button>
      </div>

      <section className="grid" aria-label="Python solution list">
        {filtered.map((item) => {
          const open = expanded.has(item.id);
          return (
            <article key={item.slug} className="card">
              <header className="card-head">
                <div>
                  <h3>{item.title}</h3>
                  <div className="card-meta">{item.week}</div>
                </div>
                <button type="button" onClick={() => toggle(item.id)}>
                  {open ? 'Hide Python Answer' : 'Show Python Answer'}
                </button>
              </header>

              {open ? (
                <div className="card-body">
                  <p className="helper">{item.explanation}</p>
                  <div className="details-text">{item.details}</div>
                  <pre>{item.pythonAnswer}</pre>
                </div>
              ) : null}
            </article>
          );
        })}
      </section>
    </main>
  );
}
