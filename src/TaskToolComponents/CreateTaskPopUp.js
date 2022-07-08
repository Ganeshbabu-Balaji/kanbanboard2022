import { useState } from 'react'
import '../css-files/createTaskPopup.css';

export const CreateTaskPopUp = ({ onCreate, trigger, setTrigger, boardList, sectionName, projectTitle }) => {



    const [taskInputTitle, setTaskInputTitle] = useState('')
    const [taskInputDescription, setTaskInputDescription] = useState('')
    const [taskInputDeadline, setTaskInputDeadline] = useState('')


    const handleSubmitTask = () => { //Creates a task then resets the input field
        if (taskInputTitle.length === 0 && taskInputDescription.length === 0) {
            onCreate('Untitled Task', 'No Description', sectionName, projectTitle, taskInputDeadline);

            setTaskInputTitle('');
            setTaskInputDescription('');
            setTaskInputDeadline('');

            setTrigger(false);
        }
        else if (taskInputTitle.length === 0) {
            onCreate('Untitled Task', sectionName);
            
            setTaskInputTitle('');
            setTaskInputDescription('');
            setTaskInputDeadline('');

            setTrigger(false);
        }

        else if (taskInputDescription.length === 0) {
            onCreate(taskInputTitle, 'No Description', sectionName, projectTitle, taskInputDeadline);

            setTaskInputTitle('');
            setTaskInputDescription('');
            setTaskInputDeadline('');

            setTrigger(false);

        }

        else {
            onCreate(taskInputTitle, taskInputDescription, sectionName, projectTitle, taskInputDeadline);
            setTaskInputTitle('');
            setTaskInputDescription('');
            setTrigger(false);
        }
    }


    const onEnterButton = (event) => { //Function for pressing the enter button when submiting the task (Does not work if using the <Form> element)
        if (event.key === 'Enter') {
            handleSubmitTask();
        }
    }

    return (trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='popup-inner-header'>
                    <h2>Enter Task Details</h2>
                </div>
                <form className='popup-inner-body'>
                    <div className='field'>
                        <p>Title</p>
                        <input className='input-button' type='text' placeholder='Enter title' value={taskInputTitle} onChange={(e) => setTaskInputTitle(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Enter Description</p>
                        <input className='input-button' type='text' placeholder='Enter description' value={taskInputDescription} onChange={(e) => setTaskInputDescription(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Enter Deadline</p>
                        <input className='input-button' type='text' placeholder='Enter description' value={taskInputDeadline} onChange={(e) => setTaskInputDeadline(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                </form>
                <div className='popup-inner-buttons'>
                    <button className='submit' type='button' style={{ backgroundColor: '#8fff9f' }} onClick={() => handleSubmitTask()}>Create Task</button>
                    <button className='submit' type='button' style={{ backgroundColor: '#FF7F7F ' }} onClick={() => setTrigger(false)}>Cancel</button>

                </div>
            </div>
        </div>
    ) : "";
}

















