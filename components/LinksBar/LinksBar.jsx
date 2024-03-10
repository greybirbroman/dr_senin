'use client';
import styles from './LinksBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import SpanImage from '../../public/phone-icon.svg';
import { authorContactsLinks } from '../../utils/constants';
import { useState } from 'react';

const LinksBar = ({ white, isHover }) => {
  const [isTelephoneHovered, setTelephoneHovered] = useState(false);

  const spanTelNumberController = ( id ) => {
  
      id === 1 ? setTelephoneHovered(true) : setTelephoneHovered(false);
  
  }

  return (
    <div className={styles.linksContainer}>
      <ul className={styles.linksList}>
        {authorContactsLinks.map((link) => (
          <li key={link.id} className={styles.listItem} onMouseEnter={() => spanTelNumberController(link.id)} onMouseLeave={() => setTelephoneHovered(false)}>
            <Link href={link.linkHref} target="_blank" aria-label={link.label} className={styles.link}>
              <Image
                src={white ? link.imgSrcWhite : link.imgSrcDefault}
                alt={link.imgAlt}
                className={styles.linkImage}
              />
            </Link>
          </li>
        ))}
      </ul>
      {isTelephoneHovered && !white && (
        <span className={styles.spanContentContainer}>
          <Image src={SpanImage} alt="Иконка, изображение телефона" width={25} height={25} />
          <p>+7(903)168-63-87</p>
        </span>
      )}
    </div>
  );
};

export default LinksBar;
