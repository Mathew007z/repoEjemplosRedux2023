import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = { 
    // recibe tres cosas la configuracion 1  - key, 2- el lugar donde va a guardar la info,
    //y el tercero es una combinacion de el persistReducer
    key:'root',
    storage,
    whilelist:['persistedReducer']
}

// combina la configuracion del persist con sus parametros, y el rootReducer de los reducer combinados.
const persistedReducer = persistReducer(persistConfig,rootReducer)




export const store = createStore(persistedReducer,applyMiddleware(thunk));