import React from 'react';
import Task from "../Task/Task";
import {connect} from "react-redux";
import {addTask, deleteTask, performTask, updateTask} from "../../redux/task_reducer";

const ToDoList = (props) => {
    const addTask = () => {
        props.addTask('test');
    };

    return (
        <div>
            <button onClick={addTask}>add task</button>
            {props.tasks.map(item =>
                <Task key={item.id}
                      id={item.id}
                      performed={item.performed}
                      task={item.task}
                      deleteTask={props.deleteTask}
                      performTask={props.performTask}
                      updateTask={props.updateTask}/>
            )}
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
        updateTask: (id, text) => dispatch(updateTask(id, text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);