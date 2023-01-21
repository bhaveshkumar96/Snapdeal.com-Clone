import {reducer as AdminReducer} from "../Redux/Admin/reducer"
let rootReducer = combineReducers({AdminReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));