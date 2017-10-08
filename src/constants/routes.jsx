/* eslint one-var: 0 */
/* eslint max-len: 0 */

import Main from "../modules/main/Main";
import Movies from "../modules/movies/MoviesPage";
import MovieDetails from "../modules/movieDetails/MovieDetailsPage";
import error from "../modules/error/error";

export const routesObject = {
    path: "/",
    component: Main,
    indexRoute: { component: Movies },
    childRoutes: [
        { path: "movies/:movie", component: MovieDetails },
        { path: "*", component: error }
    ]
};
