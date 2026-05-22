import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext.jsx";

const Footer = ({name}) => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
            <h2>Copyright ⓒ 2026. {name} All rights reserved.</h2>
        </footer>
    );
};
export default Footer;