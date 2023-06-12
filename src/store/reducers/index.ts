import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer,
})

export type RootReducer = ReturnType<typeof rootReducer>