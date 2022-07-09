import React from 'react'
import { useState } from 'react';
import { EditTaskListItem } from './EditTaskListItem';
import { Comment } from '../Comments/Comment';
import { CommentForm } from '../Comments/CommentForm';

import '../css-files/DetailedTaskPopup.css';

export const DetailedTaskPopup = ({
    setEditStatus,
    onSaveEdit,
    task,
    onChangeStatus,
    boardList,
    projectTitle,
    commentList,
    onCreateComment,
    onDeleteComment,
    onEditComment

}) => {

    const [isTitleBeingEdited, setTitleEditStatus] = useState(false);
    const [isDesBeingEdited, setDesEditStatus] = useState(false);
    const [isDeadlineBeingEdited, setDeadlineEditStatus] = useState(false);

    const onSaveTaskWithChange = (id, title, des, newStatus) => {
        onChangeStatus(id, title, des, newStatus, projectTitle);
        setEditStatus(false);
    }

    const statusChangeButtons = boardList.map((button) => {
        return <button key={button.id}
            style={{ backgroundColor: button.color }} onClick={() => onSaveTaskWithChange(task.id, task.title, task.des, button.status)}
        >{button.title}
        </button>
    })

    const filteredCommentList = commentList.filter(elem => elem.parent === task.id);
    const comments = [].concat(filteredCommentList) 
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((comment, i) =>
            <Comment key={i}
                comment={comment}
                text={comment.text}
                onCreateComment={onCreateComment}
                onDeleteComment={onDeleteComment}
                onEditComment={onEditComment}
                id={comment.id}
                date={comment.date}
                parent={comment.parent}
            />

        );
    return (

        <div className='popup'>



            <div className='popup-inner1'>


                <div className='popup-inner-taskdetails1'>

                    <div className='popup-inner-header1'>
                        <div className='header-title'>
                            {isTitleBeingEdited === false &&
                                <div>
                                    <h1 onClick={() => setTitleEditStatus(true)} >{task.title} </h1>

                                </div>
                            }
                            {isTitleBeingEdited === true &&
                                <EditTaskListItem isTitleBeingEdited={true} toggleEdit={setTitleEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Title' projectTitle={projectTitle} />
                            }
                        </div>
                        <div  className='close-button'>
                            <button style={{fontSize: '15px', borderRadius: '100px'}} onClick={() => setEditStatus(false)}>x</button>

                        </div>

                    </div>

                    <div className='popup-inner-body1'>

                        <div className='body-des'>
                            <h3 style={{ backgroundColor: 'green' }}>Description:</h3>
                            {isDesBeingEdited == false &&
                                <p style={{ backgroundColor: 'green' }} onClick={() => setDesEditStatus(true)}>{task.des}</p>
                            }
                            {isDesBeingEdited == true &&
                                <EditTaskListItem isDesBeingEdited={true} toggleEdit={setDesEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem='Edit Description' projectTitle={projectTitle} />
                            }

                        </div>
                        <div className='body-dates'>
                            <div className='date-column'>
                                <p>Date Created: </p>
                                <p>{task.date} </p>

                            </div>
                            <div className='date-column'>
                                <p>Deadline:</p>
                                {isDeadlineBeingEdited === false &&

                                    <p onClick={() => setDeadlineEditStatus(true)}>{task.deadline}</p>

                                }
                                {isDeadlineBeingEdited === true &&
                                    <EditTaskListItem isDeadlineBeingEdited={true} toggleEdit={setDeadlineEditStatus} onSaveEdit={onSaveEdit} task={task} clickedItem={'Edit deadline'} projectTitle={projectTitle}/>
                                }
                            </div>
                        </div>
                        <div className='body-comments'>
                            <div className='comments-display'>
                                <h3>Comments:</h3>
                                {comments}
                            </div>

                            <CommentForm taskid={task.id} onCreateComment={onCreateComment} />
                        </div>

                        <div className='popup-inner-footer'>

                            <p>Move to:</p>
                            <div className='popup-inner-body-buttons1'>

                                {statusChangeButtons}

                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}