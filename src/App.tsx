import { Routes, Route } from 'react-router-dom';

import Main from './pages/Home/Home';
import Music from './pages/Music/Music';
import Message from './pages/Message/Message';
import Friend from './pages/Friend/Friend';
import Setting from './pages/Setting/Setting';

import { ThemeProvider } from './context/ThemeContext';
import { SnowProvider } from './context/SnowContext';
import Preloader from './components/Preloader/Preloader';
import SnowfallComponent from './components/Snowfall/SnowfallComponent';

function App() {
    return (
        <>
            <Preloader />
            <ThemeProvider>
                <SnowProvider>
                    <SnowfallComponent />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/message" element={<Message />} />
                        <Route path="/friend" element={<Friend />} />
                        <Route path="/setting" element={<Setting />} />
                    </Routes>
                </SnowProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
