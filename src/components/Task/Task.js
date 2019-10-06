import React, {useState, useEffect} from 'react';
import s from './Task.module.css';
import buttonDelete from './../../img/delete.png';
import buttonPerform from './../../img/check_empty.png';
import buttonCancel from './../../img/check_fill.png';

const Task = ({id, performed, task, deleteTask, performTask, updateTask}) => {
    const [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    };

    const offEditMode = () => {
        setEditMode(false);
    };

    const handleDelete = (id) => {
        deleteTask(id);
    };

    const handlePerform = (id) => {
        performTask(id);
    };

    const handleChange = (id, e) => {
        updateTask(id, e.currentTarget.value);
    };

    return (
        <div className={s.blank}>
            <div className={s.textTask}>
                {editMode && <div className={s.text}>
                    <textarea autoFocus
                              value={task}
                              onBlur={offEditMode}
                              onChange={(e) => handleChange(id, e)}/>
                </div>}
                {!editMode && <div className={s.text}>
                    <span onDoubleClick={onEditMode}>{task}</span>
                </div>}
            </div>
            <div className={s.buttonControl}>
                <div className={s.buttonIcon}>
                    <div onClick={() => handlePerform(id)}>
                        {performed && <img src={buttonCancel}/> || <img src={buttonPerform}/>}
                    </div>
                </div>
                <div className={s.buttonIcon}>
                    <div onClick={() => handleDelete(id)}>
                        <img src={buttonDelete}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;