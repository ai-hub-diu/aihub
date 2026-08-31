import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIHUB | Learn AI. Build What Matters.",
  description:
    "Practical AI learning connected to real-world work — courses, verified skills and industry opportunities in one platform.",
  openGraph: {
    title: "AIHUB | Learn AI. Build What Matters.",
    description:
      "Practical AI learning connected to real-world work — courses, verified skills and industry opportunities in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIHUB | Learn AI. Build What Matters.",
    description:
      "Practical AI learning connected to real-world work — courses, verified skills and industry opportunities in one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
