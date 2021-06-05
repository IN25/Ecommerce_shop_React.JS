import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; //allows a browser to cash(perserve) the store
import thunk from "redux-thunk"; //redux-think is a piece of middleware that allow us fire functions

//We need to add Middleware to our store so that whenever an action gets fired or dispatched we can catch and display them, it is helpful for debugging our redux, it catches the actions and console.logs them
//Middleware are functions that take actions in, do something with them and pass them into the Root Reducer
//in order to use Middleware, we have to import logger
import logger from "redux-logger";
import rootReducer from "./root_reducer";

const middlewares = [thunk];

//this condition will make sure that actions are shown in console only in the development stage of our application, and not in the deployment stage
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//creating the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persostor version of the store
