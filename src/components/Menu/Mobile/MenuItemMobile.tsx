import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from '../../SVG/SVG';

interface MenuItemProps {
    to?: string;
    icon: string;
    label: string;
    tooltip: string;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    isCollapsed: boolean;
    onClick?: () => void;
}

const MenuItemMobile: React.FC<MenuItemProps> = ({ to, icon, tooltip, placement = 'right' }) => {
    const menuItem = (
        <li data-tooltip={tooltip} data-placement={placement}>
            <SVG className="svg-icon" name={icon} />
        </li>
    );

    return to ? (
        <NavLink to={to} className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            {menuItem}
        </NavLink>
    ) : (
        <a href="#" className="menu-link">
            {menuItem}
        </a>
    );
};

export default MenuItemMobile;
