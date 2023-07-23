import styles from '../app/page.module.css';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
