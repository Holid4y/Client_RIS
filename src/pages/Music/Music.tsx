import React, {useState} from 'react';
import { useMenu } from '../../context/MenuContext'; // Импортируем хук
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

import MyMusicAccordion from './components/MyMusicAccordion';
import PopularMusicAccordion from './components/PopularMusicAccordion';
import NewMusicAccordion from './components/NewMusicAccordion';
import MenuMobile from '../../components/Menu/Mobile/MenuMobile';

const Music: React.FC = () => {
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
                    <div className="container-center">
                    <input type="text" className="input_" placeholder="@oleg_yurlov"/>
                    <div className="group-btn">
                        
                            <button
                                className={`btn dark accordion ${activeContent === 'content1' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content1')}
                                data-target="content1"
                            >
                                Моя музыка
                            </button>
                            <button
                                className={`btn dark accordion ${activeContent === 'content2' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content2')}
                                data-target="content2"
                            >
                                Популярное
                            </button>
                            <button
                                className={`btn dark accordion ${activeContent === 'content3' ? 'show' : ''}`}
                                onClick={() => handleAccordionClick('content3')}
                                data-target="content3"
                            >
                                Новое
                            </button>
                            <button className="btn secondary end">Добавить</button>
                        </div>

                        <div className={`accordion-content ${activeContent === 'content1' ? 'show' : ''}`} id="content1" >
                            <MyMusicAccordion />
                        </div>
                        <div className={`accordion-content ${activeContent === 'content2' ? 'show' : ''}`} id="content2" >
                            <PopularMusicAccordion />
                        </div>
                        <div className={`accordion-content ${activeContent === 'content3' ? 'show' : ''}`} id="content3" >
                            <NewMusicAccordion />
                        </div>
                    </div>
                    <div className="container-right"></div>
                </div>
            </main>
            <footer>
                <MenuMobile/>
            </footer>
        </>
    );
}

export default Music;
