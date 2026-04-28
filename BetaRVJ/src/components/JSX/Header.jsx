import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ padding: "1rem", background: "#eee" }}>
            <nav>
                <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
                <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
                <Link to="/signin" style={{ marginRight: "1rem" }}>SingIn</Link>
            </nav>
        </header>
    );
}

export default Header;