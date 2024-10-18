import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Home from "../pages/Home";
import MoviePage from "../movie/MoviePage";

const projectRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/movies",
                element: <MoviePage />
            },
            // {
            //     path: "/movies",
            //     element: <MoviePage />
            // }
        ]
    }
])


export default projectRouter;