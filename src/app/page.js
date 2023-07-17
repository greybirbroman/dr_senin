import styles from './page.module.css';
import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contacts from '@/components/Contacts/Contacts';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <About />
      <Testimonials />
      {/* <Contacts /> */}
    </main>
  );
}
