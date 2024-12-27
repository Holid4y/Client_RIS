import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from '../../components/SVG/SVG';

interface MenuItemProps {
    to?: string;
    icon: string;
    label: string;
    tooltip: string;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    isCollapsed: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon, label, tooltip, placement = 'right', isCollapsed, onClick }) => {
    const menuItem = (
        <li data-tooltip={tooltip} data-placement={placement}>
            <SVG className="svg-icon" name={icon} />
            <span className={isCollapsed ? 'hidden' : ''}>{label}</span>
        </li>
    );

    return to ? (
        <NavLink to={to} className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            {menuItem}
        </NavLink>
    ) : (
        <a href="#" className="menu-link" onClick={onClick}>
            {menuItem}
        </a>
    );
};

export default MenuItem;
