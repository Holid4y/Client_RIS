import React from 'react';
import { useMenu } from '../../context/MenuContext'; // Импортируем хук
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Listuser from './components/ListUsers/Listusers';
import MenuMobile from '../../components/Menu/Mobile/MenuMobile';

const Friend: React.FC = () => {
    const { isCollapsed, handleCollapse } = useMenu(); // Получаем состояние и функцию

    return (
        <>
            <Header isCollapsed={isCollapsed} />
            <main>
                <div className="container">
                    <div className={`container-left ${isCollapsed ? 'collapsed' : ''}`}>
                        <Menu isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
                    </div>
                    <div className="container-center scrollable">
                        <Listuser />
                    </div>
                    <div className="container-right">

                    </div>
                </div>
            </main>
            <footer>
                <MenuMobile/>
            </footer>
        </>
    );
}

export default Friend;
