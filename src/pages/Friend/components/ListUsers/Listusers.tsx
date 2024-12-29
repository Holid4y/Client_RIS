import { useState, useEffect } from "react";
import SVG from "../../../../components/SVG/SVG";

function Listuser() {
    // Инициализация состояния из localStorage или дефолтное значение
    const [isBlockView, setIsBlockView] = useState(() => {
        return localStorage.getItem('viewMode') === 'line' ? false : true;
    });

    // Обновление localStorage при изменении состояния
    useEffect(() => {
        localStorage.setItem('viewMode', isBlockView ? 'block' : 'line');
    }, [isBlockView]);

    // Переключение состояния
    const toggleView = () => {
        setIsBlockView(prev => !prev);
    };

    return (
        <>
            <div className="group_input">
                <input type="text" className="input_" placeholder="@oleg_yurlov"/>
                <button id="toggleViewBtn" onClick={toggleView}>
                    <SVG name={isBlockView ? "widget_block" : "widget_line"} />
                </button>
            </div>

            <div className={`media-container ${isBlockView ? 'block' : 'line'}`} id="mediaContainer">
            <div className="card">
                    <img src="images/people/women/01.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Максим</span>
                            <small>Филатов</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/02.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Дмитрий</span>
                            <small>Юрлов</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/03.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Денис</span>
                            <small>Калядин</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/04.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Александр</span>
                            <small>Лебедев</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/05.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Илья</span>
                            <small>Жуков</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/06.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Миша</span>
                            <small>Андреевич</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/07.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Сергей</span>
                            <small>Хорошилов</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/08.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Евгений</span>
                            <small>Вольнов</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/people/women/09.jpg" alt="Card Image"/>
                    <div className="content">
                        <div className="content-info">
                            <span className="title-span">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</span>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</small>
                        </div>
                        <button className="icon-btn">
                            <SVG name="dot_rev2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listuser;
