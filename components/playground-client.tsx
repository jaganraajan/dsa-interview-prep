'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { QUESTIONS } from '@/lib/questions';

type RunResponse = {
  stdout: string;
  stderr: string;
  timedOut: boolean;
  error?: string;
};

const randomQuestion = () => QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

export default function PlaygroundClient() {
  const [question, setQuestion] = useState(randomQuestion);
  const [code, setCode] = useState(question.starterCode);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<RunResponse | null>(null);
  const [running, setRunning] = useState(false);

  const helperText = useMemo(
    () =>
      'Write Python only. Your code is executed as a normal Python script (stdin from Custom Input, stdout shown in Output).',
    []
  );

  const pickAnother = () => {
    const next = randomQuestion();
    setQuestion(next);
    setCode(next.starterCode);
    setInput('');
    setResult(null);
  };

  const runCode = async () => {
    setRunning(true);
    setResult(null);
    try {
      const response = await fetch('/api/run-python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
      });

      const payload = (await response.json()) as RunResponse;
      setResult(payload);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setResult({ stdout: '', stderr: '', timedOut: false, error: message });
    } finally {
      setRunning(false);
    }
  };

  return (
    <main className="page">
      <div className="topbar">
        <div>
          <h1>Python Playground</h1>
          <p className="helper">Random question picker from your FAANG list with Python-only execution.</p>
        </div>
        <div className="badges">
          <span className="badge">Current: {question.id}</span>
          <Link className="badge" href="/">
            Back to Answers
          </Link>
        </div>
      </div>

      <section className="grid">
        <article className="card">
          <header className="card-head">
            <div>
              <h3>{question.title}</h3>
              <div className="card-meta">{question.week}</div>
            </div>
            <button type="button" onClick={pickAnother}>
              Random Question
            </button>
          </header>
          <div className="card-body">
            <p className="helper">{question.explanation}</p>
          </div>
        </article>
      </section>

      <section className="playground-layout" aria-label="Python playground editor">
        <div className="stack">
          <article className="card">
            <header className="card-head">
              <h3>Python Editor</h3>
            </header>
            <div className="card-body">
              <p className="helper">{helperText}</p>
              <textarea
                className="code"
                spellCheck={false}
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
            </div>
          </article>

          <article className="card">
            <header className="card-head">
              <h3>Custom Input (stdin)</h3>
            </header>
            <div className="card-body">
              <textarea
                className="io"
                spellCheck={false}
                placeholder="Optional stdin input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button type="button" onClick={runCode} disabled={running}>
                  {running ? 'Running...' : 'Run Python'}
                </button>
                <button
                  type="button"
                  className="secondary"
                  onClick={() => {
                    setCode(question.starterCode);
                    setInput('');
                    setResult(null);
                  }}
                >
                  Reset Code
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="stack">
          <article className="card">
            <header className="card-head">
              <h3>Output</h3>
            </header>
            <div className="card-body output">
              {result ? (
                <>
                  {result.error ? <pre>{result.error}</pre> : null}
                  {result.timedOut ? <pre>Execution timed out after 4 seconds.</pre> : null}
                  {!result.error && !result.timedOut && !result.stdout && !result.stderr ? (
                    <pre>(No output)</pre>
                  ) : null}
                  {result.stdout ? <pre>{result.stdout}</pre> : null}
                  {result.stderr ? <pre>{result.stderr}</pre> : null}
                </>
              ) : (
                <p className="helper">Run code to see stdout/stderr.</p>
              )}
            </div>
          </article>

          <article className="card">
            <header className="card-head">
              <h3>Reference Python Answer</h3>
            </header>
            <div className="card-body">
              <pre>{question.pythonAnswer}</pre>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
