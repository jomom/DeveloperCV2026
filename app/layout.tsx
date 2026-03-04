import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joel Momanyi Nyaosi | Software Engineer',
  description: 'A developer portfolio for Joel Momanyi Nyaosi, Senior Software Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
    
  );
}