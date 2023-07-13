import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Стоматолог в Санкт-Петербурге | Сенин Кирилл Алексеевич',
  description: 'Сенин Кирилл Алексеевич - врач-стоматолог в Санкт-Петербурге.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
