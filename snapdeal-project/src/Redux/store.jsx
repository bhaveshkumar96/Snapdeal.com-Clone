import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import { reducer as productReducer} from "./BeutyProducts/reducer"
import {reducer as MensProductReducer} from "./Products/reducer";

let rootReducer = combineReducers({MensProductReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));