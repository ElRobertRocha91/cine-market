import { GET_MOVIES } from "./action-types";
import axios from "axios";

const API = "http://www.omdbapi.com/?=tt38961988&apikey=cf2f0a4d";

// Creo una función para obtener la info de la api y sus peliculas
export function getMovies(){
    return async function(dispatch){
        try {
            const movies =  await axios.get(`${API}&s=Matrix`);
            return dispatch({
                type: GET_MOVIES,
                payload: movies.data.Search
            })
        } catch (error) {
            console.log(error);
        }
    }
}