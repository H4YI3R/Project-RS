import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/lesson">수업</Link> |{" "}
            <Link to="/practice">실습</Link> |{" "}
            <Link to="/assignment">과제</Link>
        </nav>
    );
}

export default Header;