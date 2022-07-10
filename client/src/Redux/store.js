import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as creatStore,
} from "redux";

import thunk from "redux-thunk";

import productReducer from "./Products/reducer";

import { authReducer } from "./auth/reducer";


const rootReducer = combineReducers({

  ecommerceData: productReducer,

  authReducer,

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = creatStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

console.log(`Store :`, store.getState());

// store.subscribe(() => console.log( `Store After subscribe :` , store.getState()))
