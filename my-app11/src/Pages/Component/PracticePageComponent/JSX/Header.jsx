import React from 'react';
import { ThemeContext } from "./ThemeContext.jsx";

const Header = ({ name }) => {
    const { isDark } = React.useContext(ThemeContext);

    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgrey',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>반갑습니다. {name}!!!</h1>
        </header>
    );
};

export default Header;