import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
});

export const metadata: Metadata = {
  title: 'GrowthGrid | The All-in-one Growth Engine',
  description: 'GrowthGrid is the all-in-one growth engine designed to help businesses find, track, and close more sales without the technical headache.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable}`}>{children}</body>
    </html>
  );
}
