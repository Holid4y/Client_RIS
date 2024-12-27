import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Определяем типы для состояния контекста
interface MenuContextType {
    isCollapsed: boolean;
    handleCollapse: () => void;
    isTooltipVisible: boolean;
    setTooltipVisible: (visible: boolean) => void;
}

// Создаем контекст с дефолтным значением
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Провайдер для состояния меню
interface MenuProviderProps {
    children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

    useEffect(() => {
        const savedState = localStorage.getItem('isCollapsed');
        if (savedState) {
            setIsCollapsed(JSON.parse(savedState));
        }
    }, []);

    const handleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('isCollapsed', JSON.stringify(newState));
        setTooltipVisible(newState); // Показать/скрыть тултипы в зависимости от состояния
    };

    return (
        <MenuContext.Provider value={{ isCollapsed, handleCollapse, isTooltipVisible, setTooltipVisible }}>
            {children}
        </MenuContext.Provider>
    );
};

// Хук для использования контекста в компонентах
export const useMenu = (): MenuContextType => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};
