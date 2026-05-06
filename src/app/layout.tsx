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
  title: "김현수 | 프론트엔드 개발자 포트폴리오",
  description:
    "화면 너머의 데이터 흐름까지 설계하는 4년 차 개발자 김현수입니다. Next.js, React, AWS 기반의 최적화된 웹 개발 경험을 공유합니다.",
  keywords: ["프론트엔드", "포트폴리오", "개발자", "김현수", "React", "Next.js", "Frontend Developer"],
  openGraph: {
    title: "김현수 | 프론트엔드 개발자 포트폴리오",
    description: "데이터 흐름을 설계하는 개발자 김현수의 포트폴리오입니다.",
    url: "https://www.sooman.dev",
    siteName: "김현수 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
