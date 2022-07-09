import React from 'react'
import { useState } from 'react'

export const EditComment = ({ id, date, parent, toggle, onEditComment }) => {

    const [commentText, setCommentText] = useState('')
    const saveComment = (newText) => {
        onEditComment(id, parent, newText, date);
        toggle(false);
    }
    return (
        <form className='edit-comment'>
            <input placeholder={'Edit Comment'} value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <button style={{ backgroundColor: 'lightgreen' }} onClick={() => saveComment(commentText)}>Save</button>
            <button onClick={() => toggle(false)}>Cancel</button>
        </form>
    )
}

