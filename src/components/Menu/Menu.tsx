import React from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
    isCollapsed: boolean;
    handleCollapse: () => void;
}

const Menu: React.FC<MenuProps> = ({ isCollapsed, handleCollapse}) => {

    return (
        <ul className={`menu ${isCollapsed ? 'collapsed' : ''}`}>
            <MenuItem to="/" icon="home_rev2" label="Профиль" tooltip="Профиль" isCollapsed={isCollapsed} />
            <MenuItem to="/message" icon="messages_rev2" label="Сообщения" tooltip="Сообщения" isCollapsed={isCollapsed} />
            <MenuItem to="/music" icon="music_rev2" label="Музыка" tooltip="Музыка" isCollapsed={isCollapsed} />
            <MenuItem to="/friend" icon="friends_rev2" label="Друзья" tooltip="Друзья" isCollapsed={isCollapsed} />
            <MenuItem to="/setting" icon="settings_rev2" label="Настройки" tooltip="Настройки" isCollapsed={isCollapsed} />
            <MenuItem
                icon="left_rev2"
                label="Скрыть"
                tooltip="Открыть"
                isCollapsed={isCollapsed}
                onClick={handleCollapse}
            />
        </ul>
    );
};

export default Menu;
