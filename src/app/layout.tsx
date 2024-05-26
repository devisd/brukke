import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/features/Header';
import Container from '@/features/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ООО 'Брюкке'",
  description: 'Колбасы, мясные изделия, молочная продукция, сыры, масло, мука',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
