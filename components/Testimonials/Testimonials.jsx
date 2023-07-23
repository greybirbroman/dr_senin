'use client'
import styles from './Testimonials.module.css';
import { useState, useEffect } from 'react';
import { testimonials } from '../../utils/info';
import { motion as m } from 'framer-motion';
import { listVariants } from '../../utils/motion';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Quote from '../../public/quote.svg';
import Star from '../../public/star.svg';
import useIsMobileResolution from '../../utils/hooks/useIsMobileResolition.js';

const Testimonials = () => {
const stars = Array(5).fill(null);
const [visibleCount, setVisibleCount] = useState(1)
const isMobileResolution = useIsMobileResolution(992)
const isNotShowAll = visibleCount < testimonials.length


const handleShowAll = () => {
    if (isNotShowAll) {
        setVisibleCount(testimonials.length);
    } else {
        setVisibleCount(1)
    }
  };

useEffect(() => {
    if (isMobileResolution) {
      setVisibleCount(1);
    } else {
      setVisibleCount(testimonials.length);
    }
  }, [isMobileResolution]);


  return (
    <section className={styles.section}>
        <SectionTitle title='отзывы'/>
        {/* <h2 className={styles.title}>Что говорят пациенты</h2> */}
      <ul className={styles.list}>
        {testimonials.slice(0, visibleCount).map((item, index) => (
          <m.li
          variants={listVariants}
          initial='hidden'
          animate='visible'
          custom={index}
          key={item.id} className={styles.listItem}>
            <div className={styles.textContainer}>
              <p className={styles.text}>{item.text}</p>
            </div>
            <div className={styles.authorContainer}>
              <div className={styles.flexContainer}>
                <div className={styles.avatar}>{item.name.charAt(0)}</div>
                <div>
                  <div className={styles.rating}>
                  {stars.map((_, index) => (
                      <Image key={index} src={Star} alt='Изображение, звезда, рейтинг'/>
                    ))}
                  </div>
                  <p className={styles.name}>{item.name}</p>
                  <span className={styles.city}>{item.city}</span>
                </div>
                <Image src={Quote} alt='Изображение, ковычки, цитата' />
              </div>
            </div>
          </m.li>
        ))}
      </ul>
      {isMobileResolution && (
        <PrimaryButton title={isNotShowAll ? 'Показать все' : 'Свернуть'} onClick={handleShowAll} area='Показать все отзывы' id='pagination'/>
      )}
    </section>
  );
};

export default Testimonials;
