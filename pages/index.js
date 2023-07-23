import styles from './page.module.css';
import HeroSection from '../components/HeroSection/HeroSection';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <About />
        <Testimonials />
      </main>
    </>
  );
}
