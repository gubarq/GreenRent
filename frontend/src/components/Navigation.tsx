import {Link, NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo-link">
                <img src="/logo.png" alt="GreenRent Logo" className="logo" />
            </Link>

            <ul className="nav-menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/bike">Bikes</NavLink></li>
                <li><NavLink to="/scooter">Scooters</NavLink></li>
                <li><NavLink to="/about">About us</NavLink></li>
            </ul>

            <div className="navbar-right">
                <img src="/phone.png" alt="icon" className="phone-icon" />
                <span>+359 88 123 4567</span>
            </div>
        </nav>
    )
}