import React from 'react'

 import '../css-files/DetailedTaskPopup.css';

export const Comment = ({onDeleteComment, text, date, time, id}) => {
  return (
    <div className='comment'>
        <p className='comment-text'>{text}</p>
        <p className='comment-details'></p>
        <button onClick={() => onDeleteComment(id)}>X</button>
    </div>
  )
}

