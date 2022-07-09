import React from 'react'
import { useState } from 'react';
import '../css-files/DetailedTaskPopup.css';
import { EditComment } from './EditComment';

export const Comment = ({ id, text, date, parent, onDeleteComment, onEditComment }) => {

  const [editStatus, setEditStatus] = useState(false);

  return (
    <div className='comment'>
      {!editStatus &&
        <p style={{ marginLeft: '10px' }} onClick={() => setEditStatus(true)} className='comment-text'>{text}</p>
      }

      {editStatus &&
        <EditComment id={id} parent={parent} date={date} toggle={setEditStatus} onEditComment={onEditComment} />
      }
      <div className='comment-details'>
        <p style={{ fontSize: '15px' }} className='comment-details'>{date}</p>
        <button onClick={() => onDeleteComment(id)}>Delete Comment</button>
      </div>
    </div>
  )
}

