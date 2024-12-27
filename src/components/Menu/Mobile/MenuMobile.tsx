import React from 'react';
import MenuItem from './MenuItemMobile';


const MenuMobile: React.FC = () => {

    return (
        <ul className={`menu_mobile`}>
            <MenuItem to="/" icon="home_rev2" label="Профиль" tooltip="Профиль" />
            <MenuItem to="/message" icon="messages_rev2" label="Сообщения" tooltip="Сообщения" />
            <MenuItem to="/music" icon="music_rev2" label="Музыка" tooltip="Музыка" />
            <MenuItem to="/friend" icon="friends_rev2" label="Друзья" tooltip="Друзья" />
            <MenuItem to="/setting" icon="settings_rev2" label="Настройки" tooltip="Настройки" />
        </ul>
    );
};

export default MenuMobile;
