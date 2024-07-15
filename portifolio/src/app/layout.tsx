import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FormContact from '@/components/FormContact';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Hydrah Tecnologia',
  description: 'Pagina para apresentar os melhores projetos desenvolvidos.',
  keywords:
    'Portfolio programador, programador, desenvolvedor, criação de sites',
  icons: '/img/favicon.ico',
  robots: 'index, follow',
  authors: [{ name: 'Eliel pereira', url: 'https://github.com/hydrahtec' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={barlow.className}>
        <NavBar />
        <FormContact />

        {children}

        <Footer />
      </body>
    </html>
  );
}
