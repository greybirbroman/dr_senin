'use client';
import { useState } from 'react';
import styles from './Navigation.module.css';
import { navTabs } from '@/utils/constants';
import Link from 'next/link';

const MenuList = ({ onClick }) => {
  return (
    <ul className={styles.menuList}>
      {navTabs.map((tab) => (
        <li key={tab.id} className={styles.menuItem}>
          <Link href={tab.link} onClick={onClick}>
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BurgerButton = ({ onClick }) => {
  return <button className={styles.burgerButton} onClick={onClick} />;
};

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <nav className={styles.nav}>
      <BurgerButton onClick={toggleMenu} />
      {isMenuVisible && <MenuList onClick={toggleMenu} />}
      <ul className={styles.navList}>
        {navTabs.map((tab) => (
          <li key={tab.id}>
            <Link href={tab.link} className={styles.navItem}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
