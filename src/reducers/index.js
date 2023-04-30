import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    contador : counterReducer
})


export default rootReducer;