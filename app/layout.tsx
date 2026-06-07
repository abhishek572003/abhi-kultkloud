import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "abhi@KultKloud | Cloud & DevOps Learning from Zero to Job-Ready",
    template: "%s | abhi@KultKloud",
  },
  description:
    "Beginner-friendly Cloud and DevOps roadmaps, courses, labs, certifications, and free resources by Abhishek Tiwari.",
  keywords: ["DevOps", "Cloud", "AWS", "Docker", "Kubernetes", "Linux", "CI/CD", "Terraform", "KultKloud"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
