import { useState } from 'react';
import '../css-files/createTaskPopup.css';

export const EditTaskListItem = ({ isTitleBeingEdited, toggleEdit, onSaveEdit, task, clickedItem }) => {

    const [changedItem, setChangedItem] = useState('')
    const saveTaskHandler = (taskId, title, des, status) => { //Saves the task then switches it back into the original component
        console.log('Task Saved');
        onSaveEdit(taskId, title, des, status);
        toggleEdit(false);
    }


    return ( //The layout for the edit task component
        <div className='edit-task'>
            
            <input
                type='text'
                placeholder = {clickedItem}
                value={changedItem}
                onChange={(e) => setChangedItem(e.target.value)}
            />

            <button className='editTaskListItemButton'
                type='button'
                onClick={() => 
                    isTitleBeingEdited ?
                    saveTaskHandler(task.id, changedItem, task.des, task.status) :
                    saveTaskHandler(task.id, task.title, changedItem, task.status)
                }
                style={{backgroundColor: '#8fff9f '}}
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