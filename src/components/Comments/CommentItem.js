import React from 'react'

function CommentItem({comment, removeComment}) {
    const {text, author} = comment;


    function handleDelete() {
        fetch(`http://localhost:4000/comments/${comment.id}`, {
            method: 'Delete',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        });
        removeComment(comment)
    }

    return (
        <div className="">
            <h4>Author: {author}</h4>
            <li className="text_background">{text}</li>
            <button className="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CommentItem;