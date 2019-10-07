import React from 'react';
import Task from "../Task/Task";
import {connect} from "react-redux";
import {
    addTask,
    changeIconColour,
    deleteTask,
    performTask,
    selectionTasks,
    updateTask
} from '../../redux/task_reducer';
import buttonAdd from './../../img/add.png';
import buttonSelection from './../../img/eye.png';
import s from './ToDoList.module.css';
import cn from 'classnames';

const ToDoList = (props) => {
    const addTask = () => {
        props.addTask('hi!');
    };

    const selectionTasks = (selection) => {
        props.selectionTasks(selection);
    };

    return (
        <div>
            <div className={s.buttonPanel}>
                <div className={s.addNewTask}>
                    <div className={cn(s.buttonIcon, s.pressButton)}
                         onClick={addTask}>
                        <img src={buttonAdd}/>
                    </div>
                    <div>Add new task</div>
                </div>
                <div className={s.addNewTask}>
                    <div className={cn(s.buttonIcon, s.pressButton)}
                         onClick={() => selectionTasks(0)}>
                        <img src={buttonSelection}/>
                    </div>
                    <div className={props.selection === 0 ? s.active : ''}>Show all tasks</div>
                    <div className={cn(s.buttonIcon, s.pressButton)}
                         onClick={() => selectionTasks(1)}>
                        <img src={buttonSelection}/>
                    </div>
                    <div className={props.selection === 1 ? s.active : ''}>Show only performed tasks</div>
                    <div className={cn(s.buttonIcon, s.pressButton)}
                         onClick={() => selectionTasks(2)}>
                        <img src={buttonSelection}/>
                    </div>
                    <div className={props.selection === 2 ? s.active : ''}>Show only unperformed tasks</div>
                </div>
            </div>
            <div className={s.areaToDoList}>
                {props.tasks.filter(item => {
                    if (props.selection === 0) {
                        return true;
                    } else if (props.selection === 1) {
                        return item.performed;
                    } else {
                        return !item.performed;
                    }
                }).map(item =>
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
        tasks: state.toDoList.tasks,
        selection: state.toDoList.selection
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: text => dispatch(addTask(text)),
        deleteTask: id => dispatch(deleteTask(id)),
        performTask: id => dispatch(performTask(id)),
        updateTask: (id, text) => dispatch(updateTask(id, text)),
        changeColour: (id, indexColour) => dispatch(changeIconColour(id, indexColour)),
        selectionTasks: (selection) => dispatch(selectionTasks(selection))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);