import type { Metadata } from 'next';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// Noto Sans KR 폰트 (한국어)
const notoSansKR = Noto_Sans_KR({
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'YulFolio',
  description: '프론트엔드 개발자 김서율의 포트폴리오 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const projectRef = useRef<HTMLDivElement>(null);
  // const studyRef = useRef<HTMLDivElement>(null);

  return (
    <html lang="ko" data-theme="autumn">
      <body className={`${inter.className} ${notoSansKR.className} antialiased`}>
        <Header />
        <main className="min-h-screen relative top-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
