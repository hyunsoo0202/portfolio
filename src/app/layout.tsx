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
  title: "김현수 | Frontend Developer",
  description: "화면 너머의 데이터 흐름까지 설계하는 4년 차 개발자 김현수입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'dark' 클래스를 추가하여 항상 다크 모드 스타일이 적용되도록 설정합니다.
    <html lang="ko" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 transition-colors duration-500`}
      >
        {/* Background Blobs - 다크 모드에서 더 선명하게 보이도록 조정됨 */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        
        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
