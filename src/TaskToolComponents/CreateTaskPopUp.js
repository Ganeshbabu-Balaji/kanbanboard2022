import { useState } from 'react'
import '../css-files/createTaskPopup.css';

export const CreateTaskPopUp = ({ onCreate, trigger, setTrigger, boardList }) => {
    
    const defaultSelection = (boardList.find(board => board.id === 1));

    // Object.values(defaultSelection)

    const [taskInputTitle, setTaskInputTitle] = useState('')
    const [taskInputDescription, setTaskInputDescription] = useState('')
    const [dropDownValue, setDropDownValue] = useState('open')


    const handleSubmitTask = () => { //Creates a task then resets the input field
    if(taskInputTitle.length === 0 && taskInputDescription.length === 0){
        onCreate('Untitled Task', 'No Description', dropDownValue);
        setTaskInputTitle('');
        setTaskInputDescription('');
        setTrigger(false);
    }
    else if(taskInputTitle.length === 0 ) {
        onCreate('Untitled Task', taskInputDescription);
        setTaskInputTitle('');
        setTaskInputDescription('');
        setTrigger(false);
    }

    else if (taskInputDescription.length === 0) {
        onCreate(taskInputTitle, 'No Description', dropDownValue);
        setTaskInputTitle('');
        setTaskInputDescription('');
        setTrigger(false);

    }

    else{
        onCreate(taskInputTitle, taskInputDescription, dropDownValue);
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
                    <div className='dropdown'>
                        <select value={dropDownValue} onChange={(e) => setDropDownValue(e.target.value)}>
                            {boardList.map((option) => (
                                <option key={option.id} value={option.status}> {option.status} </option>
                            ))}
                        </select>
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

















