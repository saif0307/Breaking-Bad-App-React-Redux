import { GET_EPISODE } from "../actions/types/types";

const episodeReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EPISODE :
            return [action.payload]
    
        default:
            return state
    }
}

export default episodeReducer