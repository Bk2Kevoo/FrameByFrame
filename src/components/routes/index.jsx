import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Home from "../pages/Home";
import MoviePage from "../movie/MoviePage";
import MovieDetails from "../movie/MovieDetails";

const projectRouter = createBrowserRouter([ // Creating a router with routes for the application.
    {
        path: "/", // Base path for the application.
        element: <App />, // Main App component that wraps around child routes.
        errorElement: <ErrorPage />, // Component to render in case of routing errors.
        children: [
            {
                index: true, // Indicates this is the default child route.
                element: <Home /> // Component rendered at the base path.
            },
            {
                path: "/movies", // Route for displaying the movies page.
                element: <MoviePage /> // Component that displays the list of movies.
            },
            {
                path: "/movies/:movieId", // Dynamic route for displaying movie details based on ID.
                element: <MovieDetails /> // Component that shows details for a specific movie.
            }
        ]
    }
]);


export default projectRouter;
// export default index;