import styles from './Logo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../images/logo-no-background.png'

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={LogoImage} alt='лого, Сенин' className={styles.logoImage}/>
    </Link>
  )
}

export default Logo
