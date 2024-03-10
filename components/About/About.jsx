import React from 'react';
import styles from './About.module.css';
import List from '../List/List';
import { MotionDiv } from '../MotionDiv/MotionDiv';
import { titleVarians } from '../../utils/motion';
import { info, freepikLink } from '../../utils/info';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

  return (
    <section className={styles.section} id="about">
      {info.map((section) => (
        <React.Fragment key={section.id}>
          <MotionDiv variants={titleVarians} initial="hidden" whileInView="show">
            <h2
              id={section.id === 1 ? 'specialization' : 'education'}
              className={`${styles.sectionTitle} ${section.id === 1 ? styles.sectionTitleColor : ''}`}
            >
              {section.title}
            </h2>
          </MotionDiv>
          <ul className={styles.list}>
            <li className={section.id === 1 ? styles.item : styles.flex}>
              {section.id === 1 && (
                <>
                  <Image
                    src={section.image}
                    quality={100}
                    sizes="(max-width: 1600px) 50vw, 33vw"
                    alt="Изображение, зубы, протезирование"
                    className={styles.image}
                  />
                  <Link href={freepikLink ? freepikLink : ''} className={styles.freepik} target="_blank">
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
