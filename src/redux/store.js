import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; //allows a browser to cash(perserve) the store
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./collections/collections.sagas";

//We need to add Middleware to our store so that whenever an action gets fired or dispatched we can catch and display them, it is helpful for debugging our redux, it catches the actions and console.logs them
//Middleware are functions that take actions in, do something with them and pass them into the Root Reducer
//in order to use Middleware, we have to import logger
import logger from "redux-logger";
import rootReducer from "./root_reducer";

//adding saga
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //adding saga to the middlewares
//this condition will make sure that actions are shown in console only in the development stage of our application, and not in the deployment stage
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

//creating the store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//this is where sagas get runned
sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store); //persostor version of the store
