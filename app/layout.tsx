import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Nunito, Silkscreen } from "next/font/google";
import "./globals.css";
import "./kultkloud.css";
import PlatformChrome from "./_components/PlatformChrome";
import MotionProvider from "./_components/MotionProvider";

const body = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel", display: "swap" });

const description = "Job-focused Cloud, DevOps and AI infrastructure roadmaps: career paths with real salary ranges, certification quests, the best free resources, and tools. Updated every day.";

export const metadata: Metadata = {
  title: { default: "KultKloud | Your Cloud & DevOps career quest", template: "%s | KultKloud" },
  description,
  metadataBase: new URL("https://abhi-kultkloud.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: { title: "KultKloud", description, url: "https://abhi-kultkloud.vercel.app", siteName: "KultKloud", type: "website" },
  twitter: { card: "summary", title: "KultKloud", description },
};

export const viewport: Viewport = { themeColor: "#110c24", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable} ${pixel.variable}`}>
      <body><MotionProvider><PlatformChrome>{children}</PlatformChrome></MotionProvider></body>
    </html>
  );
}
