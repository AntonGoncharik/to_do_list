import React from 'react';
import ToDoList from "./components/ToDoList/ToDoList";
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = (props) => {
    document.addEventListener('mousedown', (e) => console.log(e));

    return (
        <div>
            <Provider store={store}>
                <ToDoList/>
            </Provider>
        </div>
    )
}

export default App;