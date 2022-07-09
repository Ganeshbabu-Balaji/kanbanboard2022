import { useState } from 'react';
import '../css-files/createTaskPopup.css';

export const EditProject = ({ isTitleBeingEdited, toggleEdit, onEditProject, clickedItem, project }) => {

    const [changedItem, setChangedItem] = useState('')

    const saveProjectHandler = (projectId, title, des) => { //Saves the task then switches it back into the original component
        onEditProject(projectId, title, des, project.color);
        toggleEdit(false);
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
                    isTitleBeingEdited ?
                        saveProjectHandler(project.id, changedItem, project.des) :
                        saveProjectHandler(project.id, project.title, changedItem)}
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