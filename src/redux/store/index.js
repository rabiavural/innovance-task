import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";

export const rootReducer = combineReducers({
    userReducer: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));