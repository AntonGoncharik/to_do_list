import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = (props) => {
    return (
        <div>
            <Provider store={store}>
                <Header/>
                <ToDoList/>
                <Footer/>
            </Provider>
        </div>
    )
}

export default App;