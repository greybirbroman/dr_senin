import styles from './PrimaryLink.module.css';
import Link from 'next/link';

const PrimaryLink = ({ title, href, position }) => {
  return (
    <a href={href} className={styles.link} style={{position: position }} replace>
      {title}
    </a>
  )
}

export default PrimaryLink
