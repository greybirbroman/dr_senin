import styles from './About.module.css';
import List from '../List/List';
import PrimaryLink from '../PrimaryLink/PrimaryLink';
import Image from 'next/image';
import { info } from '../../utils/info';

const About = () => {
  return (
    <section className={styles.section}>
      {info.map((section, index) => (
        <ul key={section.id} className={styles.list}>
          <div className={styles.titleContainer}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
            {section.id === 1 && (
              <PrimaryLink href='#' title='записаться' />
            )}
          </div>
          <li className={styles.item}>
            <Image
              src={section.image}
              alt='Изображение, зубы, протезирование'
              className={styles.image}
              style={{
                order: index === 1 ? 1 : -1,
              }}
            />
            <List section={section} />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default About;
