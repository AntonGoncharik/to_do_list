import React, {useState, useEffect} from 'react';

const Task = ({index, task, deleteTask, performTask, updateTask}) => {
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {

    });
    const onEditMode = () => {
        setEditMode(true);
    }
    const offEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            <div>{index}</div>
            <div>
                {editMode && <input autoFocus onBlur={offEditMode}/>}
                {!editMode && <span onDoubleClick={onEditMode}>{task}</span>}
            </div>
            <div>
                <button>edit</button>
            </div>
            <div>
                <button>delete</button>
            </div>
            <div>
                <button>perform</button>
            </div>
        </div>
    )
}

export default Task;