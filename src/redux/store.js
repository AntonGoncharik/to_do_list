import {combineReducers, createStore} from "redux";
import {taskReducer} from "./task_reducer";

const reducers = combineReducers({
    toDoList: taskReducer
});

export const store = createStore(reducers);