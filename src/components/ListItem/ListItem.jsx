import styles from './ListItem.module.css';
import tooth from '../../images/tooth.png';
import Image from 'next/image'

const ListItem = ({ text, span, year }) => {
  return (
    <li className={styles.listItem}>
      {year && <p className={styles.year}>{year}</p>}
      <div className={styles.textContainer}>
      {!year && <Image src={tooth} alt='Иконка, зуб' className={styles.icon}/>}
      <p className={styles.text}>{text} <span className={styles.span}>{span}</span></p>
      </div>
    </li>
  )
}

export default ListItem
