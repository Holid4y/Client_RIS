import { useSnow } from "../../context/SnowContext";

function SnowfallToggle() {
    const { isSnowActive, toggleSnow } = useSnow();

    return (
        <div className="dropdown">
            <label htmlFor="snow-toggle">Снег:</label>
            <select id="snow-toggle" value={isSnowActive ? 'on' : 'off'} onChange={toggleSnow}>
                <option value="on">Включить</option>
                <option value="off">Отключить</option>
            </select>
        </div>
    );
}

export default SnowfallToggle;
