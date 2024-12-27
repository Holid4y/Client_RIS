import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Preloader from '../components/Preloader/Preloader';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false); // Новый стейт для отслеживания загрузки темы

  useEffect(() => {
    // Устанавливаем тему сразу при первом рендере
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    setIsThemeLoaded(true);
  }, [theme]);

  // Если тема не загружена, не рендерим компоненты, чтобы избежать мигания
  if (!isThemeLoaded) {
    return <Preloader/>; // Возвращаем ничего, пока тема не установлена
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
