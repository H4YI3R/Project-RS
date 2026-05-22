import React, { useContext } from "react";
import { ThemeContext } from "./PracticePageComponent/JSX/ThemeContext";
import Content from "./PracticePageComponent/JSX/Content";
import Footer from "./PracticePageComponent/JSX/Footer";
import Header from "./PracticePageComponent/JSX/Header";

const Page = () => {
    const { isDark } = useContext(ThemeContext);
    const name = "홍길동"

    return (
        <div className={`page ${isDark ? "dark" : "light"}`}>
            <Header name={name} />
            <Content isDark={isDark} name={name} />
            <Footer name={name} />
        </div>
    );
};

export default Page;