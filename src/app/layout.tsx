import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// 이전에는 Geist를 latin 서브셋만 불러 한글 글리프가 아예 없었고,
// 결과적으로 본문 대부분이 OS 기본 한글 폰트로 떨어져 보는 사람마다 다르게 보였다.
//
// subsets를 지정하지 않는 건 실수가 아니다. Google Fonts는 한글을 이름 붙은
// 서브셋으로 주지 않고 unicode-range 조각으로 쪼개 배포해서, next/font의 타입에
// 'korean' 같은 값이 아예 없다. subsets를 비우면 전체 조각을 받아 self-host한다.
// 대신 preload 대상을 정할 수 없으므로 preload: false가 강제된다.
const plexKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-kr",
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
});

// 수치와 라벨 담당. 장부의 자릿수 맞는 숫자를 위해 mono.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "김현수 | 프론트엔드 개발자 포트폴리오",
  description:
    "화면 너머의 데이터 흐름까지 설계하는 5년 차 개발자 김현수입니다. Next.js, React, AWS 기반의 최적화된 웹 개발 경험을 공유합니다.",
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
      <body className={`${plexKr.variable} ${plexMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
