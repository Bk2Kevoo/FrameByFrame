import { NavLink } from "react-router-dom";

const Header = () => { // Functional component receiving dark mode state and toggle function as props.
    return (
        <header>
            <h1>
                <span className="logo" role="img"></span> 
                Frame By Frame 🎥
            </h1>

            
            <nav>
            <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active home-link" : "home-link"}>Home</NavLink> 

            <NavLink 
            end to="/movies" 
            className={({ isActive }) => isActive ? "active movies-link" : "movies-link"}>All Movies</NavLink> 

            </nav>

        </header>
    );
}

export default Header;
