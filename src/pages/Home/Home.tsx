import React from 'react';
import { useMenu } from '../../context/MenuContext'; // Импортируем хук
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Carusel from './components/Carusel/Carusel';
import Friends from './components/FriendsList/FriendsList'
import Infouser from './components/InfoUser/Infouser';

const Home: React.FC = () => {
    const { isCollapsed, handleCollapse } = useMenu();

    return (
        <>
            <Header isCollapsed={isCollapsed} />
            <main>
                <div className="container">
                    <div className={`container-left ${isCollapsed ? 'collapsed' : ''}`}>
                        <Menu isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
                    </div>
                    <div className="container-center scroll-hidden">
                        <Infouser />

                        <div className='carusel'>
                            <Carusel>
                                {[
                                    'images/people/women/01.jpg',
                                    'images/people/women/02.jpg',
                                    'images/people/women/03.jpg',
                                    'images/people/women/04.jpg',
                                    'images/people/women/06.jpg',
                                    'images/people/women/07.jpg',
                                    'images/people/women/08.jpg',
                                ].map((src, index) => (
                                    <img key={index} src={src} alt={`Image ${index + 1}`} />
                                ))}
                            </Carusel>
                        </div>

                        <Friends />

                        {/* <div className="media-container line">
                            <div className="top-card-header">
                                <span className="title">Мои треки</span>
                            </div>
                            <div className="card">
                                <img src="images/albom/albom-0003.jpg" alt="Card Image"/>
                                <div className="content">
                                    <div className="content-info">
                                        <span className="title-span">Холод</span>
                                        <small>Kai Angel</small>
                                    </div>
                                    <button className="icon-btn">
                                        <span className="time">2:40</span>
                                        
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="images/albom/albom-0003.jpg" alt="Card Image"/>
                                <div className="content">
                                    <div className="content-info">
                                        <span className="title-span">Холод</span>
                                        <small>Kai Angel</small>
                                    </div>
                                    <button className="icon-btn">
                                        <span className="time">2:40</span>
                                        
                                    </button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="images/albom/albom-0003.jpg" alt="Card Image"/>
                                <div className="content">
                                    <div className="content-info">
                                        <span className="title-span">Холод</span>
                                        <small>Kai Angel</small>
                                    </div>
                                    <button className="icon-btn">
                                        <span className="time">2:40</span>
                                        
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="container-right">
                        
                    </div>
                </div>
            </main>

            <footer>
                меню для мобилок
            </footer>
        </>
    );
}

export default Home;
