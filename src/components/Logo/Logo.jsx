import styles from './Logo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LogoColor from '../../images/logo-no-background.png'
import LogoWhite from '../../images/logo-white.svg';

const Logo = ({ white }) => {
  return (
    <Link href='/'>
      <Image src={white ? LogoWhite : LogoColor} alt='лого, Сенин' className={styles.logoImage}/>
    </Link>
  )
}

export default Logo
