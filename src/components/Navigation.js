import { Link } from "react-router-dom";
import Logo from  '../assets/Logo.svg';

export default function Header() {
    return (
        <>
            <nav>
                <Link to="/">
                <img
                    src={Logo}
                    alt="Little Lemon logo"
                ></img>
                </Link>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/menu">Menu</Link>
                <Link className="link" to="/reservations">Reservations</Link>
                <Link className="link" to="/order">Order online</Link>
                <Link className="link" to="/login">Login</Link>
            </nav>
        </>
    )
}