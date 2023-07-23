import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

const metadata = {
  title: 'Стоматолог в Санкт-Петербурге | Сенин Кирилл Алексеевич',
  description: 'Сенин Кирилл Алексеевич - врач-стоматолог в Санкт-Петербурге.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
