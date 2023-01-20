import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";

import { reducer as LoginReducer } from "./LoginAuth/reducer";
import { reducer as SignupReducer } from "./SignupAuth/reducer";
const rootReducer = combineReducers({ LoginReducer, SignupReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

if (window.Cypress) {
  window.store = store;
}
