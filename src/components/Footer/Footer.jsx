import styles from './Footer.module.css'
import Logo from '../Logo/Logo';


const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
     <Logo />
      <p className={styles.footerAuthor}>Сенин Кирилл Алексеевич</p>
      <p>&#169;{year}</p>
    </div>
  )
}

export default Footer
