import ThemeToggle from "../../../components/Themes/ThemeToggle";
import SnowfallToggle from "../../../components/Snowfall/SnowfallToggle";

function MainAccordion() {
    return (
        <>
            <div className="selected_themes">
                <ThemeToggle/>
            </div>
            <div className="dropdown">
                <label htmlFor="filter-text">Фильтр нецензурных выражений:</label>

                <select name="filter-text" id="filter-text">
                    <option value="on">Включить</option>
                    <option value="off">Отключить</option>
                </select> 
            </div>
            <div className="dropdown">
                <label htmlFor="filter-lang">Язык:</label>

                <select name="filter-lang" id="filter-lang">
                    <option value="ru">Русский</option>
                    <option value="en">Английский</option>
                    <option value="en">Китайский</option>
                </select> 
            </div>
            
            <SnowfallToggle />
        </>
    )
}
export default MainAccordion;
