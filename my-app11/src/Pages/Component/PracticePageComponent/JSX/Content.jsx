import React from 'react';

const Content = ({ isDark, name }) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>{name}님!! 리액트 Hooks 공부 중입니다.</p>
        </div>
    );
};

export default Content;