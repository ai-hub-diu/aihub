import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIHUB | Learn AI. Work. Build. Grow.",
  description:
    "Learn practical AI skills, discover industry opportunities, build verified experience and earn credentials with AIHUB.",
  openGraph: {
    title: "AIHUB | Learn AI. Work. Build. Grow.",
    description:
      "Learn practical AI skills, discover industry opportunities, build verified experience and earn credentials with AIHUB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIHUB | Learn AI. Work. Build. Grow.",
    description:
      "Learn practical AI skills, discover industry opportunities, build verified experience and earn credentials with AIHUB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
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
