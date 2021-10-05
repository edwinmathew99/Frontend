import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../reducer";


export const store=createStore(rootReducer,compose(applyMiddleware(thunk)))

store.subscribe(()=>{
    console.log("store=>",store.getState())
})