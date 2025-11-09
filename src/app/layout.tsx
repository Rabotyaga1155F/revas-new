import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Агентство недвижимости РЕВАС',
  description:
    'Надежное агентство РЕВАС поможет вам найти идеальное жилье. Широкий выбор квартир, домов и коммерческой недвижимости. Звоните для консультации!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
