import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./Admin/reducer";


let rootReducer = combineReducers({AdminReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));