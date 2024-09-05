import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import NavBar from '@/components/other/NavBar'; // Import NavBar
import Footer from '@/components/other/Footer'; // Import Footer

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Auth Next',
    default: 'Auth Next',
  },
  description: 'A simple authentication service with Auth Next v5!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen flex flex-col bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <NavBar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
