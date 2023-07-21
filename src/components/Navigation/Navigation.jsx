'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Navigation.module.css';
import { navTabs } from '@/utils/constants';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

const MenuList = ({ onClick }) => {
  return (
    <ul className={styles.menuList}>
      {navTabs.map((tab) => (
        <li key={tab.id} className={styles.menuItem} onClick={onClick}>
          <a href={tab.link} area-aria-label={tab.area}>
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const BurgerButton = ({ onClick }) => {
  
  return (
    <button
      className={styles.burgerButton}
      onClick={onClick}
      type='button'
      id='al'
      aria-label='Иконка, меню, бургер'
      role='button'
    />
  );
};

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState)
  };

  const handleClickOutsideMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
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
    <nav className={styles.nav} ref={menuRef}>
      <BurgerButton onClick={toggleMenu}/>
      {isMenuVisible && (
          <MenuList onClick={toggleMenu}/>
      )}
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
              <a href={tab.link} className={styles.navItem}>
                {tab.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
