import styles from './LinksBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { authorContactsLinks } from '@/utils/constants';

const LinksBar = ({ white }) => {

  return (
    <ul className={styles.linksList}>
      {authorContactsLinks.map((link) => (
          <li key={link.id} className={styles.listItem}>
            <Link
              href={link.linkHref}
              target='_blank'
              aria-label={link.label}
              className={styles.link}
            >
              <Image
                src={white ? link.imgSrcWhite : link.imgSrcDefault}
                alt={link.imgAlt}
                className={styles.linkImage}
              />
            </Link>
          </li>
      ))}
    </ul>
  );
};

export default LinksBar;
