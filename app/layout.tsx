import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono, Silkscreen } from "next/font/google";
import "./globals.css";
import "./visual-refresh.css";
import "./kultkloud.css";
import PlatformChrome from "./_components/PlatformChrome";
import MotionProvider from "./_components/MotionProvider";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel", display: "swap" });

const description = "Free certification roadmaps, learning routes and hands-on tools for Cloud, DevOps and AI infrastructure, updated automatically. Earn XP as you learn.";

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

// Dark by default; applied before paint so there is no flash of the wrong theme.
const themeScript = `try{if(localStorage.getItem("theme")!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${pixel.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><MotionProvider><PlatformChrome>{children}</PlatformChrome></MotionProvider></body>
    </html>
  );
}
