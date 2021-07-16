import {
    GET_CHARACTERS
    
  } from "../actions/types/types";

  const dataReducer = (state = [], action) => {
      switch (action.type) {
          case GET_CHARACTERS:
              return [...state, ...action.payload]
                    
          default:
             return state;
      }
  }

  export default dataReducer