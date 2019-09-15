import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import ToDoList from "./components/ToDoList/ToDoList";
import Header from "./components/Header/Header";

const App = (props) => {
    return (
        <div>
            <Header/>
            <ToDoList/>
            <Footer/>
        </div>
    )
}

export default App;
