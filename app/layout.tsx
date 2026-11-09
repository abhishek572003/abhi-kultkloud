import type { Metadata } from "next";
import { Atkinson_Hyperlegible, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import "./visual-refresh.css";
import "./kultkloud.css";
import PlatformChrome from "./_components/PlatformChrome";

const display = Unbounded({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description = "Curated, beginner-friendly routes through Cloud, DevOps and AI infrastructure, with hand-picked free videos and docs.";

export const metadata: Metadata = {
  title: {
    default: "KultKloud | Learn Cloud, DevOps and AI infrastructure in order",
    template: "%s | KultKloud",
  },
  description,
  metadataBase: new URL("https://abhi-kultkloud.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: { title: "KultKloud", description, url: "https://abhi-kultkloud.vercel.app", siteName: "KultKloud", type: "website" },
  twitter: { card: "summary", title: "KultKloud", description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body><PlatformChrome>{children}</PlatformChrome></body>
    </html>
  );
}
