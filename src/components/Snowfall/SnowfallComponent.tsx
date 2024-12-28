// Только для App.tsx
import Snowfall from './Snowfall';
import { useSnow } from '../../context/SnowContext';

function SnowfallComponent() {
    const { isSnowActive } = useSnow();

    return isSnowActive ? <Snowfall /> : null;
}

export default SnowfallComponent;
