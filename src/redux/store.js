import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import youtubeReducer from "./ducks/youtubeReducer";
import twitchReducer from "./ducks/twitchReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
  youtubeReducer,
  twitchReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
