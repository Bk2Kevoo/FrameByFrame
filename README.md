# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

How to Run the Server:

Open the package.json file and add the following line in the scripts section: "server": "json-server --watch db.json --port=6001". This will set up the JSON server to manage our data.

Open your terminal. Depending on the dependency you are using—either VITE or CRA—start the application by running npm run dev for VITE or npm start for CRA.

You should now see the Home Page. Next, open a separate terminal tab and run npm run server. This will allow you to view all the movies displayed on the "All Movies" page!

Now that we can see the movies, let’s discuss functionality!

As a user, you can filter movies by rating, genre, and even search for a specific movie among our selections. These features are accessible to all users and will help you find exactly what you're looking for!