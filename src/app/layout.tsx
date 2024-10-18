import type { Metadata } from 'next';
import './globals.css';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import Header from './components/Header';

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
  return (
    <html lang="ko" data-theme="cupcake">
      <body className={`${inter.className} ${notoSansKR.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
