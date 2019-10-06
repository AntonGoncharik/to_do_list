import React from 'react';
import Task from "../Task/Task";
import {connect} from "react-redux";
import {addTask, changeIconColour, deleteTask, performTask, updateTask} from '../../redux/task_reducer';
import buttonAdd from './../../img/add.png';
import s from './ToDoList.module.css';
import cn from 'classnames';

const ToDoList = (props) => {
    const addTask = () => {
        props.addTask('hi!');
    };

    return (
        <div>
            <div className={s.addNewTask}>
                <div className={cn(s.buttonIcon, s.pressButton)}
                     onClick={addTask}>
                    <img src={buttonAdd}/>
                </div>
                <div>Add new task</div>
            </div>
            <div className={s.areaToDoList}>
                {props.tasks.map(item =>
                    <Task key={item.id}
                          id={item.id}
                          indexColour={item.colour}
                          performed={item.performed}
                          task={item.task}
                          deleteTask={props.deleteTask}
                          performTask={props.performTask}
                          updateTask={props.updateTask}
                          changeColour={props.changeColour}/>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.toDoList.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: text => dispatch(addTask(text)),
        deleteTask: id => dispatch(deleteTask(id)),
        performTask: id => dispatch(performTask(id)),
        updateTask: (id, text) => dispatch(updateTask(id, text)),
        changeColour: (id, indexColour) => dispatch(changeIconColour(id, indexColour))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);