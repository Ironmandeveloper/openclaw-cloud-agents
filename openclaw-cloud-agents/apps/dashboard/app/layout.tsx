import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenClaw Cloud Agents',
  description: 'Production-style OpenClaw cloud dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
