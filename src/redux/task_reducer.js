const ADD_TASK = 'ADD_TASK';
const PERFORM_TASK = 'PERFORM_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_ICON_COLOUR = 'CHANGE_ICON_COLOUR';
const SELECTION_TASKS = 'SELECTION_TASKS';

const initialState = {
    selection: 0,
    tasks: [{id: 1, performed: false, task: 'hi!', colour: 0}]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, {
                    id: Math.max(...state.tasks.map(item => {
                        return item.id
                    })) + 1,
                    performed: false,
                    task: action.text,
                    colour: 0
                }]
            };
            break;
        case PERFORM_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, performed: !item.performed}
                    }
                    return item;
                })
            };
            break;
        case UPDATE_TASK:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, task: action.text}
                    }
                    return item;
                })
            };
            break;
        case DELETE_TASK:
            if (state.tasks.length === 1) return state;
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)};
            break;
        case CHANGE_ICON_COLOUR:
            return {
                ...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.id) {
                        return {...item, colour: action.indexColour}
                    }
                    return item;
                })
            };
            break;
        case SELECTION_TASKS:
            return {...state, selection: action.selection};
            break;
        default:
            return state;
    }
};

export const addTask = (text) => {
    return {type: 'ADD_TASK', text}
};

export const performTask = (id) => {
    return {type: 'PERFORM_TASK', id}
};

export const updateTask = (id, text) => {
    return {type: 'UPDATE_TASK', id, text}
};

export const deleteTask = (id) => {
    return {type: 'DELETE_TASK', id}
};

export const changeIconColour = (id, indexColour) => {
    return {type: 'CHANGE_ICON_COLOUR', id, indexColour}
};

export const selectionTasks = (selection) => {
    return {type: 'SELECTION_TASKS', selection}
};
