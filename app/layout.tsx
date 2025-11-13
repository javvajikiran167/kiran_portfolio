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
  title: "Kiran | Unity Performance Consultant",
  description:
    "Consulting portfolio for Kiran, a Unity specialist helping game studios ship performant titles through audits, optimisation, and team enablement.",
  openGraph: {
    title: "Kiran — Unity Performance Consultant",
    description:
      "Game engineering partner for studios that need senior-level Unity support, performance audits, and gameplay architecture.",
    url: "https://kiran-portfolio.example.com",
    siteName: "Kiran Consulting",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran — Unity Performance Consultant",
    description:
      "Game engineering partner for studios that need senior-level Unity support, performance audits, and gameplay architecture.",
  },
  metadataBase: new URL("https://kiran-portfolio.example.com"),
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
