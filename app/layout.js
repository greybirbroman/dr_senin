import './globals.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const metadata = {
  title: 'Стоматолог в Санкт-Петербурге | Сенин Кирилл Алексеевич',
  description: 'Сенин Кирилл Алексеевич - врач-стоматолог в Санкт-Петербурге.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
