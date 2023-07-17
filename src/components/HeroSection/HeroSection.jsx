'use client'
import styles from './HeroSection.module.css';
import Image from 'next/image';
import MainImage from '../../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg';
import LinksBar from '../LinksBar/LinksBar';
import { motion as m } from 'framer-motion';
import { photoVariants } from '@/utils/motion';
import useIsMobileResolution from '@/utils/hooks/useIsMobileResolition';

const HeroSection = () => {
  const isMobileResolution = useIsMobileResolution(992)
  console.log(isMobileResolution)
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.heroWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.headText}>Сенин <br /> Кирилл Алексеевич</h1>
          <ul className={styles.spanList}>
            <li className={styles.spanItem}>Врач - Стоматолог</li>
            <li className={styles.spanItem}>Стаж с 2006 года</li>
          </ul>
          <LinksBar white={isMobileResolution ? true : false}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          
            {/* Изображение будет другим, качественным */}
            <m.div
              variants={photoVariants}
              initial='hidden'
              animate='show'
              className={styles.motionContainer}
            >
            <Image
              src={MainImage}
              alt='Сенин Кирилл Алексеевич'
              title='Сенин Кирилл Алексеевич'
              className={styles.mainImage}
            />
            </m.div>
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
