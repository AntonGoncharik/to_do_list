import React, {useState, useEffect} from 'react';

const Task = ({id, performed, task, deleteTask, performTask, updateTask}) => {
    const [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    };

    const offEditMode = () => {
        setEditMode(false);
    };

    const handleEdit = (id) => {
        updateTask(id, 'changed');
    };

    const handleDelete = (id) => {
        deleteTask(id);
    };

    const handlePerform = (id) => {
        performTask(id);
    };

    return (
        <div>
            <div>{id}</div>
            <div>{performed && "yes" || 'no'}</div>
            <div>
                {editMode && <input autoFocus onBlur={offEditMode}/>}
                {!editMode && <span onDoubleClick={onEditMode}>{task}</span>}
            </div>
            <div>
                <button onClick={() => handleEdit(id)}>edit</button>
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