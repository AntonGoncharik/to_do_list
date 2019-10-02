import React, {useState, useEffect} from 'react';

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
        <div>
            <div>{id}</div>
            <div>{performed && "yes" || 'no'}</div>
            <div>
                {editMode && <input autoFocus
                                    value={task}
                                    onBlur={offEditMode}
                                    onChange={(e) => handleChange(id, e)}/>}
                {!editMode && <span onDoubleClick={onEditMode}>{task}</span>}
            </div>
            <div>
                <button onClick={() => handleDelete(id)}>delete</button>
            </div>
            <div>
                <button onClick={() => handlePerform(id)}>perform</button>
            </div>
        </div>
    )
}

export default Task;