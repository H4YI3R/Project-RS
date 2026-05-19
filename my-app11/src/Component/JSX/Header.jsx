import { Link } from "react-router-dom";
import '../CSS/Header.css'
function Header() {
    return (
        <nav>
            <Link to="/">메뉴</Link>
            <Link to="/Ln">수업</Link>
            <Link to="/Pt">실습</Link>
            <Link to="/Ag">과제</Link>
        </nav>
    );
}

export default Header;