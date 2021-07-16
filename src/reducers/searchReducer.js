import { SEARCH_INPUT } from "../actions/types/types";


 const searchReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return action.payload
    
        default:
          return state
    }
 }

 export default searchReducer