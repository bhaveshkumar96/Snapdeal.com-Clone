import { reducer as AdminReducer } from "../Redux/Admin/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
// import { reducer as productReducer} from "./BeutyProducts/reducer"
import { reducer as MensProductReducer } from "./Products/reducer";

import { reducer as CartReducer } from "./Cart/reducer";
const rootReducer = combineReducers({
  MensProductReducer,
  AdminReducer,
  CartReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

if (window.Cypress) {
  window.store = store;
}
