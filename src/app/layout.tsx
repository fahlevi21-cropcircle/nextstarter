import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fahlevi Afghani - Software Engineer",
  description: "Professional portfolio of Cropcircle - Fahlevi Afghani, a Full Stack Developer and UI/UX Designer specializing in modern web applications and user-centered design.",
  keywords: ["Full Stack Developer", "UI/UX Designer", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Cropcircle - Fahlevi Afghani" }],
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
