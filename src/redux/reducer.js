import { GET_MOVIES } from "./action-types";

const initialState = {
    allMovies: [],
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_MOVIES:
            // Retornamos un objeto
            return {
                ...state,
                allMovies: action.payload
            };    
        default:
            return{
                ...state
            };
    }
}

export default rootReducer;