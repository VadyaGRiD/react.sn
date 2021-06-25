import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth.reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;