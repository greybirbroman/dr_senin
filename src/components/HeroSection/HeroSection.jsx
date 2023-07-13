import styles from './HeroSection.module.css';
import Image from 'next/image';
import MainImage from '../../images/main-image.jpg';

const HeroSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.heroWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.headText}>Сенин <br /> Кирилл Алексеевич</h1>
          <ul className={styles.spanList}>
            <li className={styles.spanItem}>Врач - Стоматолог</li>
            <li className={styles.spanItem}>Стаж с 2006 года</li>
          </ul>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <div className={styles.overlayContainer}>
            {/* Изображение будет другим, качественным */}
            <Image
              src={MainImage}
              alt='Сенин Кирилл Алексеевич'
              title='Сенин Кирилл Алексеевич'
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
