import React, { useState, useEffect } from 'react';
import './Preloader.css';  // Стили для прелоадера

const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ждём, пока тема и остальные ресурсы будут загружены
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Задержка 500 мс для плавного исчезновения прелоадера

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoaded ? 'loaded' : ''}`}>
      {/* Здесь можно разместить спиннер или текст */}
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
