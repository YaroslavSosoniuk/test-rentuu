import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import * as reducers from "./ducks";
import userReducer from './ducks/userpage/userPageReducer';
import usersPageReducer from './ducks/usersPage/usersPageReducer';

const rootReducer = combineReducers({userReducer, usersPageReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));
export {store};