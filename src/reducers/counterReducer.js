import { INCREMENT, DECREMENT, RESET } from "../types";



const initialState = 0;


export  function counterReducer(state = initialState , action){

    switch(action.type){
        case INCREMENT:
            return state + 1;
         case DECREMENT:
            return state - 1;
        case RESET:
            return initialState;
        default: return state
    }

}
 