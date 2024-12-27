import React from 'react';
import { useMenu } from '../../context/MenuContext';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
    const { isCollapsed, handleCollapse } = useMenu();

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
