'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Navigation.module.css';
import { navTabs } from '@/utils/constants';
import Link from 'next/link';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

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
  const menuRef = useRef(null);
  console.log(menuRef)

  const toggleMenu = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    } else {
      setIsMenuVisible(true);
    }
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <BurgerButton onClick={toggleMenu} />
      {isMenuVisible && <div ref={menuRef}><MenuList onClick={toggleMenu}/></div>}
      <ul className={styles.navList}>
        {navTabs.map((tab) => (
          <li key={tab.id}>
            {tab.id === 3 ? (
              <PrimaryLink
                href={tab.link}
                title={tab.title}
                position='relative'
              />
            ) : (
              <Link href={tab.link} className={styles.navItem}>
                {tab.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
