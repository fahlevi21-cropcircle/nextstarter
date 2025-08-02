import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer & UI/UX Designer",
  description: "Professional portfolio of John Doe, a Full Stack Developer and UI/UX Designer specializing in modern web applications and user-centered design.",
  keywords: ["Full Stack Developer", "UI/UX Designer", "Web Development", "React", "Next.js", "Portfolio"],
  authors: [{ name: "John Doe" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
