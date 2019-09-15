import {combineReducers, createStore} from "redux";
import {taskReducer} from "./task_reducer";

let reducers = combineReducers({
    toDoList: taskReducer
});

export let store = createStore(reducers);