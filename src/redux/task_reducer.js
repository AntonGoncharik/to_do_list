const ADD_TASK = 'ADD_TASK';
const PERFORM_TASK = 'PERFORM_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    tasks: [{id: 1, task: 'first task'}]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            break;
        case PERFORM_TASK:
            break;
        case UPDATE_TASK:
            break;
        case DELETE_TASK:
            break;
    }
}

export const addTask = () => {
    return {type: 'ADD_TASK'}
}

export const performTask = () => {
    return {type: 'PERFORM_TASK'}
}

export const updateTask = () => {
    return {type: 'UPDATE_TASK'}
}

export const deleteTask = () => {
    return {type: 'DELETE_TASK'}
}
