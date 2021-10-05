import { combineReducers } from "redux";
import { adminReducer } from "./user.reducer";



export const rootReducer=combineReducers({
    admin:adminReducer
})