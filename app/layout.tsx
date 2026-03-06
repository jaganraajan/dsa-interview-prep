import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LeetCode Python Practice',
  description: 'Python-only interview question bank and playground built from a curated FAANG list.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
