import './globals.css';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
  display: 'swap'
 });

export const metadata = {
  title: 'Стоматолог в Санкт-Петербурге | Сенин Кирилл Алексеевич',
  description: 'Сенин Кирилл Алексеевич - врач-стоматолог в Санкт-Петербурге.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
