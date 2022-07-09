import { useState } from 'react';
import '../css-files/createTaskPopup.css';

export const EditTaskListItem = ({ isDesBeingEdited, isDeadlineBeingEdited, isTitleBeingEdited, toggleEdit, onSaveEdit, task, clickedItem, projectTitle }) => {

    const [changedItem, setChangedItem] = useState('')
    const saveTaskHandler = (taskId, title, des, status, deadline) => { //Saves the task then switches it back into the original component
        onSaveEdit(taskId, title, des, status, projectTitle, deadline, task.date);
        toggleEdit(false);
    }

    const editTask = (changedItem) => {
        if (changedItem.length > 0) {
            if (isTitleBeingEdited) {
                saveTaskHandler(task.id, changedItem, task.des, task.status, task.deadline)
            }
            else if (isDesBeingEdited) {
                saveTaskHandler(task.id, task.title, changedItem, task.status, task.deadline)
            }
            else if (isDeadlineBeingEdited) {
                saveTaskHandler(task.id, task.title, task.des, task.status, changedItem)

            }
        }
    }
    return ( //The layout for the edit task component
        <div className='edit-task'>

            <input
                type='text'
                placeholder={clickedItem}
                value={changedItem}
                onChange={(e) => setChangedItem(e.target.value)}
            />

            <button className='editTaskListItemButton'
                type='button'
                onClick={() =>
                    editTask(changedItem)
                }
                style={{ backgroundColor: '#8fff9f ' }}
            >
                Save
            </button>

            <button
                className='editTaskListItemButton'
                type='button' onClick={() => toggleEdit(false)}
            >
                Cancel
            </button>

        </div>

    );
}