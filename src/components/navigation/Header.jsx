import { NavLink } from "react-router-dom";

const Header = ({ isDarkMode, toggleDarkMode }) => { // Functional component receiving dark mode state and toggle function as props.
    return (
        <header>
            <h1>
                <span className="logo" role="img"></span> 
                Frame By Frame 🎥
            </h1>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> 
            {/* // NavLink to Home with active class for styling. */}

            <NavLink end to="/movies" className={({ isActive }) => isActive ? "active" : ""}>All Movies</NavLink> 
            {/* // NavLink to Movies page with active class. */}

            <button onClick={toggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
             {/* // Button to toggle dark/light mode. */}

        </header>
    );
}

export default Header;
