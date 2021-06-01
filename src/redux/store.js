import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; //allows a browser to cash the store

//We need to add Middleware to our store so that whenever an action gets fired or dispatched we can catch and display them, it is helpful for debugging our redux, it catches the actions and console.logs them
//Middleware are functions that take actions in, do something with them and pass them into the Root Reducer
//in order to use Middleware, we have to import logger
import logger from "redux-logger";
import rootReducer from "./root_reducer";

const middlewares = [logger];

//creating the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persostor version of the store

