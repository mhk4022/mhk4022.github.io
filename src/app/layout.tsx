import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mhk4022 portfolio",
  description: "mhk4022 portfolio",
  themeColor: "#111827",
  openGraph: {
    title: "mhk4022 portfolio",
    description: "mhk4022 portfolio",
    url: "https://mhk4022.github.io",
    type: "website",
    locale: "ja_JP",
    siteName: "mhk4022 portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/78911947?v=4",
        width: 100,
        height: 100,
        alt: "mhk4022 logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "mhk4022 portfolio",
    description: "mhk4022 portfolio",
    images: ["https://avatars.githubusercontent.com/u/78911947?v=4"],
    creator: "@mhk40222",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
