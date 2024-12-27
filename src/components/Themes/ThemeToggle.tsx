import { useTheme } from '../../context/ThemeContext'; // Импортируем хук из контекста

function ThemeToggle() {
    const { theme, setTheme } = useTheme(); // Получаем тему и функцию для её изменения

    return (
        <>
            <div>
                <input type="radio" id="dark" name="switchThemes" value="dark" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
                <label htmlFor="dark">
                    <div className="theme_block dark">
                        <span>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.</span>
                        <a href="#">Ссылка</a>
                        <button>Кнопка</button>
                    </div>
                </label>
                {theme === 'dark' && <small>Текущая</small>}
            </div>
            <div>
                <input type="radio" id="light" name="switchThemes" value="light" checked={theme === 'light'} onChange={() => setTheme('light')} />
                <label htmlFor="light">
                    <div className="theme_block light">
                        <span>Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.</span>
                        <a href="#">Ссылка</a>
                        <button>Кнопка</button>
                    </div>
                </label>
                {theme === 'light' && <small>Текущая</small>}
            </div>
        </>
    );
}

export default ThemeToggle;
