import styles from './HeroSection.module.css';
import Image from 'next/image';
import MainImage from '../../public/senin-main.webp';
import LinksBar from '../LinksBar/LinksBar';
import { MotionDiv } from '../MotionDiv/MotionDiv';
import { photoVariants } from '../../utils/motion';
import useIsMobileResolution from '../../utils/hooks/useIsMobileResolition';

const HeroSection = () => {
  const isMobileResolution = useIsMobileResolution(992);
  const sectionSpanContent = ['Врач - Стоматолог', 'Стаж с 2006 года'];

  return (
    <>
      <section className={styles.sectionWrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.headText}>
              Сенин <br /> Кирилл Алексеевич
            </h1>
            <ul className={styles.spanList}>
              {sectionSpanContent.map((item) => (
                <li key={item} className={styles.spanItem}>
                  {item}
                </li>
              ))}
            </ul>
            <LinksBar white={isMobileResolution ? true : false} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBox}>
            <MotionDiv variants={photoVariants} initial="hidden" animate="show" className={styles.motionContainer}>
              <Image
                src={MainImage}
                sizes="(max-width: 1000px) 100vw, (max-width: 1600px) 50vw, 33vw"
                priority={true}
                quality={100}
                alt="Сенин Кирилл Алексеевич, фотография"
                title="Сенин Кирилл Алексеевич"
                className={styles.mainImage}
              />
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
