import React from 'react';
import SVG from '../SVG/SVG';

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
                    <div className="btn-profile">
                        <SVG name="bottom_rev2" />
                        <img src="images/people/women/01.jpg" alt="/newjesus" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
