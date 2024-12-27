import React from 'react';

interface HeaderProps {
    isCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCollapsed }) => {
    return (
        <header>
            <div className="container">
                <div className={`container-left ${isCollapsed ? 'collapsed' : ''}`}>
                    <span className="jost-custom">RIS</span>
                </div>
                <div className="container-center">
                    аудио плеер
                </div>
                <div className="container-right">
                    кнопка профиля
                </div>
            </div>
        </header>
    )
}
export default Header;
