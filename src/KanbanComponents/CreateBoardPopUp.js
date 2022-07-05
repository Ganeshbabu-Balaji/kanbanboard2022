import { useState } from 'react'
import '../css-files/createTaskPopup.css';

export const CreateBoardPopUp = ({ onCreateBoard, trigger, setTrigger}) => {

    const [boardInputTitle, setBoardInputTitle] = useState('')
    const [boardInputStatus, setBoardInputStatus] = useState('')
    const [boardInputColor, setBoardInputColor] = useState('')


    const handleSubmitTask = () => { //Creates a task then resets the input field
        onCreateBoard(boardInputTitle, boardInputStatus, boardInputColor)
        setTrigger(false);
        setBoardInputTitle('');
        setBoardInputStatus('');
        setBoardInputColor('');
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
                    <h2>Enter Board Details</h2>
                </div>
                <form className='popup-inner-body'>
                    <div className='field'>
                        <p>Title</p>
                        <input className='input-button' type='text' placeholder='Enter title' value={boardInputTitle} onChange={(e) => setBoardInputTitle(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Status</p>
                        <input className='input-button' type='text' placeholder='Enter title' value={boardInputStatus} onChange={(e) => setBoardInputStatus(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
                    <div className='field'>
                        <p>Enter Color</p>
                        <input className='input-button' type='text' placeholder='Enter color' value={boardInputColor} onChange={(e) => setBoardInputColor(e.target.value)} onKeyPress={onEnterButton} />
                    </div>
         
                </form>
                <div className='popup-inner-buttons'>
                    <button className='submit' type='button' style={{ backgroundColor: '#8fff9f' }} onClick={() => handleSubmitTask()}>Create Board</button>
                    <button className='submit' type='button' style={{ backgroundColor: '#FF7F7F ' }} onClick={() => setTrigger(false)}>Cancel</button>

                </div>
            </div>
        </div>
    ) : "";
}



