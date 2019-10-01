const ADD_TASK = 'ADD_TASK';
const PERFORM_TASK = 'PERFORM_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const initialState = {
    tasks: [{id: 1, performed: false, task: 'first task'},
        {id: 2, performed: false, task: 'second task'},
        {id: 3, performed: false, task: 'third task'}]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {id: state.tasks.length + 1, performed: false, task: action.text}]
            };
            break;
        case PERFORM_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, performed: true}
                    }
                    return item;
                })
            };
            break;
        case UPDATE_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, text: action.text}
                    }
                    return item;
                })
            };
            break;
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)};
            break;
        default:
            return state;
    }
}

export const addTask = (text) => {
    return {type: 'ADD_TASK', text}
}

export const performTask = (id) => {
    return {type: 'PERFORM_TASK', id}
}

export const updateTask = (id, text) => {
    return {type: 'UPDATE_TASK', id, text}
}

export const deleteTask = (id) => {
    return {type: 'DELETE_TASK', id}
}
