import React from 'react'
import '../css-files/createTaskPopup.css';
import { useState } from 'react'



const CreateProjectPopup = ({ toggle, onCreateProject}) => {

    const [projectInputTitle, setProjectInputTitle] = useState('')
    const [projectInputDescription, setProjectInputDescription] = useState('')
    const [projectInputColor, setProjectInputColor] = useState('')

    const handleSubmitProject = () => {
        onCreateProject(projectInputTitle, projectInputDescription, projectInputColor)
    }
    const onEnterButton = (event) => { //Function for pressing the enter button when submiting the task (Does not work if using the <Form> element)
        if (event.key === 'Enter') {
            handleSubmitProject();
            toggle(false);
        }
    }

    return (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-inner-header'>
                    <h2>Enter Project Details</h2>
                </div>
                <form className='popup-inner-body'>
                    <div className='field'>
                        <p>Enter Title</p>
                        <input className='input-button' type='text' placeholder='Enter title' value={projectInputTitle} onChange={(e) => setProjectInputTitle(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Enter Description</p>
                        <input className='input-button' type='text' placeholder='Enter description' value={projectInputDescription} onChange={(e) => setProjectInputDescription(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Enter Color</p>
                        <input className='input-button' type='text' placeholder='Enter color' value={projectInputColor} onChange={(e) => setProjectInputColor(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                </form>
                <div className='popup-inner-buttons'>
                    <button className='submit' type='button' style={{ backgroundColor: '#8fff9f' }} onClick={() => handleSubmitProject()}>Create Task</button>
                    <button className='submit' type='button' style={{ backgroundColor: '#FF7F7F ' }} onClick={() => toggle(false)}>Cancel</button>

                </div>
            </div>
        </div>
    )
}

export default CreateProjectPopup