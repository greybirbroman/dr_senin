'use client';
import React from 'react';
import styles from './About.module.css';
import List from '../List/List';
import { motion as m } from 'framer-motion';
import { titleVarians } from '@/utils/motion';
import { info } from '../../utils/info';
import SectionTitle from '../SectionTitle/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const freepikLink = 'https://ru.freepik.com/free-photo/top-view-over-career-guidance-items-for-dentists_27641893.htm#page=6&query=dental%20sergery&position=12&from_view=search&track=ais'
  return (
    <section className={styles.section} id='about'>
      <SectionTitle title='обо мне' />
      {info.map((section) => (
       <React.Fragment key={section.id}>
          <m.h2
            variants={titleVarians}
            initial='hidden'
            whileInView='show'
            id={section.id === 1 ? 'specialization' : 'education'}
            className={`${styles.sectionTitle} ${
              section.id === 1 ? styles.sectionTitleColor : ''
            }`}
          >
            {section.title}
          </m.h2>
          <ul
            className={styles.list}
          >
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
                  <Link
                    href={freepikLink}
                    className={styles.freepik}
                    target='_blank'
                  >
                    Изображение от Freepik
                  </Link>
                </>
              )}
              <List section={section} />
            </li>
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
};

export default About;
