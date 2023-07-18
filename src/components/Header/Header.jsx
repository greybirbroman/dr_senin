import styles from './Header.module.css'
import Logo from '../Logo/Logo'
// import Image from 'next/image'
// import Phone from '../../images/phone-icon.svg';
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <div id='home' className={styles.header}>
     <Logo />
     {/* <div className={styles.phoneContainer}>
     <Image src={Phone} className={styles.phoneIcon} alt='Мобильный телефон'/>
        <p className={styles.phone}>+7 903 168 6387</p>
     </div> */}
     <Navigation />
    </div>
  )
}

export default Header
