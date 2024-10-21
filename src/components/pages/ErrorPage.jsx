import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../navigation/Header";

function ErrorPage() {
    const { error } = useRouteError(); 
    // Accessing routing error using useRouteError hook.

    return (
        <div>
            <Header /> 
            {error.message} 
            {/* // Displaying the error message to the user. */}
        </div>
    );
}

export default ErrorPage;