import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iamashmit.tech"), 
  title: {
    default: "Ashmit Singh | Full-Stack Developer",
    template: "%s | Ashmit Singh",
  },
  description: "A self-taught Full-Stack Developer and engineering student from Mumbai, specializing in modern web technologies and custom software solutions.",
  openGraph: {
    title: "Ashmit Singh | Full-Stack Developer",
    description: "A self-taught Full-Stack Developer and engineering student from Mumbai, specializing in modern web technologies and custom software solutions.",
    url: "https://iamashmit.tech",
    siteName: "Ashmit Singh's Portfolio",
    images: [
      {
        url: "/front.jpeg", 
        width: 350,
        height: 350,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashmit Singh | Full-Stack Developer",
    description: "A self-taught Full-Stack Developer and engineering student from Mumbai, specializing in modern web technologies and custom software solutions.",
    images: ["/front.jpeg"], 
  },
  keywords: ["Ashmit Singh", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio", "Software Engineer"],
  creator: "Ashmit Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      > 
        <Navbar/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
