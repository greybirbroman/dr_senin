import styles from './Header.module.css'
import Logo from '../Logo/Logo'
// import Image from 'next/image'
// import Phone from '../../images/phone-icon.svg';
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <div id='home' className={styles.header}>
     {/* <Logo /> */}
     <Navigation />
    </div>
  )
}

export default Header
