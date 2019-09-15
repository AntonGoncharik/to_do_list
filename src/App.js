import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import ToDoList from "./components/ToDoList/ToDoList";

const App = (props) => {
    return (
        <div>
            <Footer/>
            <ToDoList/>
            <Footer/>
        </div>
    )
}

export default App;
