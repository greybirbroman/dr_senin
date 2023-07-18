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
            {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
            {/* {section.id === 1 && (
              <PrimaryLink href='#' title='записаться' />
            )} */}
          </div>
          <div className={section.id === 1 ? styles.background : ''}>
            <li className={section.id === 1 ? styles.item : styles.flex}>
              {/* <div className={styles.titleTitle}> */}
              {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
              {/* </div> */}
              {section.id === 1 && (
                <Image
                  src={section.image}
                  alt='Изображение, зубы, протезирование'
                  className={styles.image}
                // style={{
                //   order: index === 1 ? 1 : -1,
                // }}
                />
              )}
              {/* <div> */}
              {/* <h3 className={styles.sectionTitle}>{section.title}</h3> */}
              <List section={section} />
              {/* </div> */}
            </li>
          </div>
        </ul>
      ))}
    </section>
  );
};

export default About;
