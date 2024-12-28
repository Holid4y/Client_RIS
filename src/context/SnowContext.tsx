import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SnowContextType {
    isSnowActive: boolean;
    toggleSnow: () => void;
}

const SnowContext = createContext<SnowContextType | undefined>(undefined);

export const useSnow = () => {
    const context = useContext(SnowContext);
    if (!context) {
        throw new Error('useSnow must be used within a SnowProvider');
    }
    return context;
};

export const SnowProvider = ({ children }: { children: ReactNode }) => {
    const [isSnowActive, setIsSnowActive] = useState(() => {
        return localStorage.getItem('isSnowActive') === 'true';
    });

    const toggleSnow = () => {
        setIsSnowActive((prev) => {
            const newState = !prev;
            localStorage.setItem('isSnowActive', newState.toString());
            return newState;
        });
    };

    return (
        <SnowContext.Provider value={{ isSnowActive, toggleSnow }}>
            {children}
        </SnowContext.Provider>
    );
};
