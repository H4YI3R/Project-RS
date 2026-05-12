import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/Ln">수업</Link> |{" "}
            <Link to="/Pt">실습</Link> |{" "}
            <Link to="/Ag">과제</Link>
        </nav>
    );
}

export default Header;