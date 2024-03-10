import React from 'react'
import styles from './ContactItem.module.css';
import Image from 'next/image';
import Link from 'next/link';


const ContactItem = ({ icon, alt, content, href }) => {
    return (
      <li className={styles.listItemRow}>
        <Link className={styles.navLink} href={href} target='_blank'>
          <Image className={styles.contact} src={icon} alt={alt} />
          {content}
        </Link>
      </li>
    );
  };

export default ContactItem
