import { useState } from 'react';
import '../CSS/index.css';
import Page from './Page';
import { ThemeContext } from "./PracticePageComponent/JSX/ThemeContext";

function AssignmentPage() {
    const [isDark, setIsDark] = useState(false);
    const [inputName, setInputName] = useState("");
    const [name, setName] = useState("");

    const handleSave = () => {
        setName(inputName);
    };

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <div className="practice-page">

                <div className="name-box">
                    <input
                        type="text"
                        placeholder="이름 입력"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />

                    <button onClick={handleSave}>
                        저장
                    </button>
                </div>

                <Page name={name} />
            </div>
        </ThemeContext.Provider>
    );
}

export default AssignmentPage;