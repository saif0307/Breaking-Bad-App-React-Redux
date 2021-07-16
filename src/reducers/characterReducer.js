import {
    GET_CHARACTER} from '../actions/types/types'

    const characterReducer = (state = [], action) => {
        switch (action.type) {
            case GET_CHARACTER:
                return  [action.payload]
            
               
        
            default:
                return state
        }
    } 

    export default characterReducer