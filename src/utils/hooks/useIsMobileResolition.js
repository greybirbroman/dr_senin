'use client'
import { useState, useEffect } from 'react';

const useIsMobileResolution = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1200); // Здесь можно изменить ширину экрана, при которой считать разрешение мобильным
  };

  useEffect(() => {
    // При монтировании компонента проверяем разрешение и устанавливаем начальное значение
    checkIsMobile();

    // Добавляем обработчик события resize
    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobileResolution;
