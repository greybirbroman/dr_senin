'use client'
import styles from './About.module.css';
import List from '../List/List';
import { motion as m } from 'framer-motion';
import { titleVarians } from '@/utils/motion';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { info } from '../../utils/info';

const About = () => {
  return (
    <section className={styles.section} id='about'>
      <SectionTitle title='обо мне' />
      {info.map((section, index) => (
        <ul key={section.id} className={styles.list} id={section.id === 1 ? 'specialization' : 'education'}>
          <m.h3
          variants={titleVarians}
          initial='hidden'
          whileInView='show'
          className={`${styles.sectionTitle} ${
            section.id === 1 ? styles.sectionTitleColor : ''
          }`}>{section.title}</m.h3>
            <li className={section.id === 1 ? styles.item : styles.flex}>
              {section.id === 1 && (
                <>
                <Image
                  src={section.image}
                  quality={100}
                  sizes='(max-width: 1600px) 50vw, 33vw'
                  alt='Изображение, зубы, протезирование'
                  className={styles.image}
                />
                <Link href="https://ru.freepik.com/free-photo/top-view-over-career-guidance-items-for-dentists_27641893.htm#page=6&query=dental%20sergery&position=12&from_view=search&track=ais" className={styles.freepik} target='_blank'>Изображение от Freepik</Link>
                </>
              )}
              <List section={section} />
            </li>
        </ul>
      ))}
    </section>
  );
};

export default About;
