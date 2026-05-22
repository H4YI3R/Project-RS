import { useState } from 'react';
import '../CSS/index.css';
import Page from './Page';
import { ThemeContext } from "./PracticePageComponent/JSX/ThemeContext";

function PracticePage() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <div className="practice-page">
                <Page />
            </div>
        </ThemeContext.Provider>
    );
}

export default PracticePage;