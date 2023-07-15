import styles from './PrimaryLink.module.css';
import Link from 'next/link';

const PrimaryLink = ({ title, href, position }) => {
  return (
    <Link href={href} className={styles.link} style={{position: position}}>
      {title}
    </Link>
  )
}

export default PrimaryLink
