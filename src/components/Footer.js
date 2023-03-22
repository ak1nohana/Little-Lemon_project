import { Link } from "react-router-dom";
import Logo from "../assets/footer-logo.png";

export default function Footer() {
return(
    <section className="container-footer">
        <section className="footer">
            <img className="footer-logo" src={Logo} alt="Little Lemon Logo" />
            <article className="links">
                <h3>Navigation</h3>
                <Link className="f-link" to="/">Home</Link>
                <Link className="f-link" to="/about">About</Link>
                <Link className="f-link" to="/menu">Menu</Link>
                <Link className="f-link" to="reservations">Reservations</Link>
                <Link className="f-link" to="/order">Order online</Link>
                <Link className="f-link" to="/login">Login</Link>
            </article>
            <article className="links">
                <h3>Contacts</h3>
                <p>2859 Oakmound Drive, Chicago, Illinois</p>
                <p>773-320-3748</p>
                <a
                className="f-link"
                href="mailto: info@littlelemon.com"
                target="_blank"
                rel="noreferrer"
                >
              info@littlelemon.com
                </a>
            </article>
            <article className="links">
                <h3>Social media</h3>
                <Link
                to="https://www.facebook.com/"
                className="f-link">
                    Facebook
                </Link>
                <Link
                to="https://www.instagram.com/"
                className="f-link">
                    Instagram
                </Link>
                <Link
                to="https://twitter.com/"
                className="f-link">
                    Twitter
                </Link>
            </article>
        </section>
    </section>
)
}