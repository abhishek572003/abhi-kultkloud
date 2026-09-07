import type { Metadata } from "next";
import "./globals.css";
import PlatformChrome from "./_components/PlatformChrome";

export const metadata: Metadata = {
  title: {
    default: "Abhishek Tiwari | Technical Learning Portfolio",
    template: "%s | abhi.tiwari/learn",
  },
  description: "A calm, practical knowledge platform for cloud, DevOps, data, Adobe Experience, and generative AI.",
  metadataBase: new URL("https://abhi-kultkloud.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: { title: "Abhishek Tiwari | Technical Learning Portfolio", description: "A chronological learning record and practical knowledge platform for cloud and DevOps.", url: "https://abhi-kultkloud.vercel.app", siteName: "abhi.tiwari/learn", type: "website" },
  twitter: { card: "summary", title: "Abhishek Tiwari | Technical Learning Portfolio", description: "A practical knowledge platform for cloud and DevOps." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><PlatformChrome>{children}</PlatformChrome></body>
    </html>
  );
}
