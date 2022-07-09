import React, { useState } from 'react'

export const CommentForm = ({ onCreateComment, taskid }) => {

    const [commentText, setCommentText] = useState('');

    const onSubmitComment = () => {
        if (commentText.length > 0) {
            onCreateComment(taskid, commentText);
            setCommentText('');
        }
    }
    return (
        <div className='comments-form'>
            <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder='Enter a new comment' />
            <button onClick={() => onSubmitComment()}>Submit</button>
        </div>
    )
}

