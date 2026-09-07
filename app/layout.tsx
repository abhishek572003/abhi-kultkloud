import type { Metadata } from "next";
import "./globals.css";
import PlatformChrome from "./_components/PlatformChrome";

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
    <html lang="en">
      <body><PlatformChrome>{children}</PlatformChrome></body>
    </html>
  );
}
