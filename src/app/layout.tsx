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
          'min-h-screen flex flex-col bg-background font-sans antialiased overflow-hidden',
          fontSans.variable
        )}
      >
        <NavBar /> {/* Render NavBar here */}
        <main className="flex-grow">{children}</main> {/* Main content area */}
        <Footer /> {/* Render Footer here */}
      </body>
    </html>
  );
}
