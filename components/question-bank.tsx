'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { QUESTIONS, WEEK_NAMES } from '@/lib/questions';

export default function QuestionBank() {
  const [query, setQuery] = useState('');
  const [week, setWeek] = useState('ALL');
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(new Set());
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

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

  const toggleAnswer = (id: string) => {
    setExpandedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => {
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
            setExpandedAnswers(new Set());
            setExpandedDescriptions(new Set());
          }}
        >
          Reset
        </button>
      </div>

      <section className="grid" aria-label="Python solution list">
        {filtered.map((item) => {
          const answerOpen = expandedAnswers.has(item.id);
          const descriptionOpen = expandedDescriptions.has(item.id);
          return (
            <article key={item.slug} className="card">
              <header className="card-head">
                <div>
                  <h3>{item.title}</h3>
                  <div className="card-meta">{item.week}</div>
                </div>
                <div className="card-actions">
                  <button type="button" onClick={() => toggleAnswer(item.id)}>
                    {answerOpen ? 'Hide Python Answer' : 'Show Python Answer'}
                  </button>
                  <button
                    type="button"
                    className="secondary icon-toggle"
                    aria-label={descriptionOpen ? 'Collapse Description' : 'Expand Description'}
                    title={descriptionOpen ? 'Collapse Description' : 'Expand Description'}
                    onClick={() => toggleDescription(item.id)}
                  >
                    {descriptionOpen ? '▾' : '▸'}
                  </button>
                </div>
              </header>

              {descriptionOpen || answerOpen ? (
                <div className="card-body">
                  {descriptionOpen ? (
                    <>
                      <p className="helper">{item.explanation}</p>
                      <div className="details-text">{item.details}</div>
                    </>
                  ) : null}
                  {answerOpen ? <pre>{item.pythonAnswer}</pre> : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </section>
    </main>
  );
}
