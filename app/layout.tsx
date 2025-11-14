import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kiran Javvaji | Unity & Gameplay Engineering Consultant",
  description:
    "Expert Unity consultant with 8+ years shipping AAA console, mobile, and VR titles. Specializing in performance optimization, gameplay systems architecture, and team enablement. Free project audits available.",
  keywords: [
    "Unity Consultant",
    "Unity Performance Optimization",
    "Gameplay Engineering",
    "Unity Developer",
    "Game Development Consultant",
    "VR Development",
    "Console Game Development",
    "Mobile Game Development",
    "Unity Expert",
    "Performance Profiling",
  ],
  authors: [{ name: "Kiran Javvaji" }],
  creator: "Kiran Javvaji",
  openGraph: {
    title: "Kiran Javvaji — Unity & Gameplay Engineering Consultant",
    description:
      "Expert Unity consultant helping game studios ship high-performance titles across console, mobile, and VR. 8+ years experience, 12 studios partnered, 3x average performance uplift.",
    url: "https://javvajikiran167.github.io/kiran_portfolio",
    siteName: "Kiran Javvaji - Unity Consultant",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Javvaji — Unity & Gameplay Engineering Consultant",
    description:
      "Expert Unity consultant helping game studios ship high-performance titles across console, mobile, and VR. 8+ years experience, 12 studios partnered.",
  },
  metadataBase: new URL("https://javvajikiran167.github.io/kiran_portfolio"),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950/5 antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[50rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_65%)]" />
          <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
