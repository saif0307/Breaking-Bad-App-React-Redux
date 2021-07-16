import { GET_QUOTE } from "../actions/types/types"

const quoteReducer = (state = [], action) => {
    switch(action.type) {
        case GET_QUOTE:
            return action.payload
    default:
        return state
        }
}

export default quoteReducer