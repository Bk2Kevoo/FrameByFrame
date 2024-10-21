import { NavLink } from "react-router-dom";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header>
            <h1>
                <span className="logo" role="img"></span>
                Frame By Frame 🎥
            </h1>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink end to="/movies" className={({ isActive }) => isActive ? "active" : ""}>All Movies</NavLink>
            <button onClick={toggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        </header>
    );
}

export default Header;
