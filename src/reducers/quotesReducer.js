import { GET_QUOTES } from "../actions/types/types";

const quotesReducer = (state = [], action) => {
    switch(action.type) {
        case GET_QUOTES:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default quotesReducer