import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Template from '@/components/Template';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calendário de Plantio - Igrejinha/RS',
  description: 'Sistema de organização de plantio de hortaliças e frutíferas na região de Igrejinha, Rio Grande do Sul',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Template>{children}</Template>
        </body>
    </html>
  );
}