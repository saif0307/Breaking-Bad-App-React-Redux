import { GET_DEATHS } from "../actions/types/types";

const deathsReducer = (state = [], action) => {
    switch(action.type) {
        case GET_DEATHS:
            return [action.payload]
    
    default:
        return state
    }
}

export default deathsReducer