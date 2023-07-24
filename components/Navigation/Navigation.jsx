'use client';
import styles from './Navigation.module.css';
import { useState, useRef, useEffect } from 'react';
import { navTabs } from '../../utils/constants';
import PrimaryLink from '../PrimaryLink/PrimaryLink';

const MenuList = ({ onClick }) => {
  return (
    <ul className={styles.menuList}>
      {navTabs.map((tab) => (
        <li key={tab.id} onClick={onClick} className={styles.menuItem}>
          <PrimaryLink href={tab.link} title={tab.title} customClass={styles.menuLink}>
            {tab.title}
          </PrimaryLink>
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
      id='burger'
      aria-label='Иконка, меню, бургер'
      role='button'
    />
  );
};

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
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
    <nav className={styles.nav} ref={menuRef}>
      <BurgerButton onClick={toggleMenu} />
      {isMenuVisible && <MenuList onClick={toggleMenu} />}
      <ul className={styles.navList}>
        {navTabs.map((tab) => (
          <li key={tab.id}>
              <PrimaryLink
                href={tab.link}
                title={tab.title}
                position='relative'
                customClass={tab.id !== 3 && styles.navItem}
              />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

