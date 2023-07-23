'use client'
import styles from './PrimaryLink.module.css';
import preventHashLink from '../../utils/functions';

const PrimaryLink = ({ customClass, title, href, position }) => {

  const handleClick = (event) => {
    event.preventDefault();
    preventHashLink(href);
  };

  const combinedClassName = customClass ? customClass : styles.link;


  return (
    <a
      href={href}
      className={combinedClassName}
      style={{ position: position }}
      onClick={handleClick}
    >
      {title}
    </a>
  );
};

export default PrimaryLink;
