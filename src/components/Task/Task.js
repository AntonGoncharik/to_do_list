import React, {useState, useEffect} from 'react';
import s from './Task.module.css';
import cn from 'classnames';
import buttonDelete from './../../img/delete.png';
import buttonPerform from './../../img/check_empty.png';
import buttonCancel from './../../img/check_fill.png';
import iconBlue from './../../img/icon_blue.png';
import iconGreen from './../../img/icon_green.png';
import iconPink from './../../img/icon_pink.png';
import iconYellow from './../../img/icon_yellow.png';

const Task = ({id, performed, task, deleteTask, performTask, updateTask, changeColour, indexColour}) => {
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

    const changeColourIcon = (id, indexColour) => {
        changeColour(id, indexColour);
    };

    const colourList = {
        0: s.colourBlue,
        1: s.colourGreen,
        2: s.colourPink,
        3: s.colourYellow
    };

    return (
        <div>
            <div className={cn(s.blank, colourList[indexColour])}>
                <div className={s.iconWithText}>
                    <div className={s.iconColour}>
                        <div className={s.pressButton}
                             onClick={() => changeColourIcon(id, 0)}><img src={iconBlue}/>
                        </div>
                        <div className={s.pressButton}
                             onClick={() => changeColourIcon(id, 1)}><img src={iconGreen}/>
                        </div>
                        <div className={s.pressButton}
                             onClick={() => changeColourIcon(id, 2)}><img src={iconPink}/>
                        </div>
                        <div className={s.pressButton}
                             onClick={() => changeColourIcon(id, 3)}><img src={iconYellow}/>
                        </div>
                    </div>
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
                </div>
                <div className={s.buttonControl}>
                    <div className={s.buttonIcon}>
                        <div className={s.pressButton}
                             onClick={() => handlePerform(id)}>
                            {performed && <img src={buttonCancel}/> || <img src={buttonPerform}/>}
                        </div>
                    </div>
                    <div className={s.buttonIcon}>
                        <div className={s.pressButton}
                             onClick={() => handleDelete(id)}>
                            <img src={buttonDelete}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Task;