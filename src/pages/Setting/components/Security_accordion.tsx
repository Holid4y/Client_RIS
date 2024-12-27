function SecurityAccordion() {
    return (
        <>
            <div className="safety">
                <div>
                    <span>Телефон:</span><br/>
                    <small>89******65</small>
                </div>
                <a href="#">Изменить</a>
            </div>
            <div className="safety">
                <div>
                    <span>Почта:</span><br/>
                    <small>ba.batya2018@yandex.ru</small>
                </div>
                <a href="#">Изменить</a>
            </div>
            <div className="safety">
                <div>
                    <span>Пароль:</span><br/>
                    <small>•••••••••••</small>
                </div>
                <a href="#">Изменить</a>
            </div>
            <div className="safety">
                <div>
                    <span>Двухфакторная аутентификация:</span><br/>
                    <small>Подключено</small>
                </div>
                <a href="#">Перейти</a>
            </div>
            <div className="safety">
                <div>
                    <span>История активности:</span><br/>
                    <small>последеняя 20 октября</small>
                </div>
                <a href="#">Перейти</a>
            </div>
            <button className="btn dangerLarg w-100">Завершить другие сеансы</button>
        </>
    )
}
export default SecurityAccordion;
