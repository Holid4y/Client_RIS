import React, { useState } from 'react';
import { useMenu } from '../../context/MenuContext'; // Импортируем хук
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

import MainAccordion from './components/Main_accordion';
import SecurityAccordion from './components/Security_accordion';
import PrivacyAccordion from './components/Privacy_accordion';
import MenuMobile from '../../components/Menu/Mobile/MenuMobile';

const Setting: React.FC = () => {
    const { isCollapsed, handleCollapse } = useMenu(); // Получаем состояние и функцию
    const [activeContent, setActiveContent] = useState<string>('content1'); // Состояние для активного контента

    // Обработчик для переключения контента
    const handleAccordionClick = (target: string) => {
        if (activeContent === target) {
            setActiveContent(''); // Если контент уже открыт, скрываем его
        } else {
            setActiveContent(target); // Иначе открываем новый контент
        }
    };

    return (
        <>
            <Header isCollapsed={isCollapsed} />
            <main>
                <div className="container">
                    <div className={`container-left ${isCollapsed ? 'collapsed' : ''}`}>
                        <Menu isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
                    </div>
                    <div className="container-center scrollable">
                        <div className="group-btn">
                            <button
                                className={`btn dark accordion ${activeContent === 'content1' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content1')}
                                data-target="content1"
                            >
                                Основное
                            </button>
                            <button
                                className={`btn dark accordion ${activeContent === 'content2' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content2')}
                                data-target="content2"
                            >
                                Безопасность
                            </button>
                            <button
                                className={`btn dark accordion ${activeContent === 'content3' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content3')}
                                data-target="content3"
                            >
                                Приватность
                            </button>
                            <button className="btn danger end">Выйти</button>
                        </div>

                        <div className={`accordion-content ${activeContent === 'content1' ? 'show' : ''}`} id="content1" >
                            <MainAccordion />
                        </div>
                        <div className={`accordion-content ${activeContent === 'content2' ? 'show' : ''}`} id="content2" >
                            <SecurityAccordion />
                        </div>
                        <div className={`accordion-content ${activeContent === 'content3' ? 'show' : ''}`} id="content3" >
                            <PrivacyAccordion />
                        </div>
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
};

export default Setting;
