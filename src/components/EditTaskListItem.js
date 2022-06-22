import { useState } from 'react';

export const EditTaskListItem = ({ toggleEdit, onSaveEdit, task, onChangeStatus }) => {

    const [editTask, setEditTask] = useState('')

    const saveTaskHandler = (task, editTask, status) => { //Saves the task then switches it back into the original component
        console.log('Task Saved');
        onSaveEdit(task, editTask, status);
        toggleEdit();
    }

    const onSaveTaskWithChange = (id, des, newStatus) => { //Same thing as above but for onChangeStatus
        onChangeStatus(id, des, newStatus);
        toggleEdit();
    }

    return ( //The layout for the edit task component
        <div className='edit-task'>

            <input
                type='text'
                placeholder='Edit Task'
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
            />

            <button className='editTaskListItemButton'
                type='button'
                onClick={() => saveTaskHandler(task.id, editTask, task.status)}>
                Save
            </button>

            <button
                className='editTaskListItemButton'
                type='button' onClick={() => toggleEdit()}>
                Cancel
            </button>

            <button
                className='changeToOpenButton'
                type='button'
                onClick={() => onSaveTaskWithChange(task.id, task.des, 'open')}>
                Open
            </button>

            <button
                className='changeToDoingButton'
                type='button' onClick={() => onSaveTaskWithChange(task.id, task.des, 'doing')}>
                Doing
            </button>

            <button className='changeToDoneButton'
                type='button'
                onClick={() => onSaveTaskWithChange(task.id, task.des, 'done')}>
                Completed
            </button>

        </div>

    );
}