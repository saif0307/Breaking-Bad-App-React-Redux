import { GET_EPISODES } from "../actions/types/types";

const episodesReducer = (state = [], action) => {
switch (action.type) {
    case GET_EPISODES:
        return [...state, ...action.payload]
        

    default:
        return state
}
}

export default episodesReducer