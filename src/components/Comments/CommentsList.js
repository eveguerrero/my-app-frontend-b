import React, {useState, useEffect} from 'react'
import CommentItem from "./CommentItem"
import CommentForm from "./CommentForm"

function CommentsList({coffeeId}) {
    const [comments, setComments] = useState([])

    function LoadComments(id) {
        fetch(`http://localhost:4000/coffees/${id}/comments`)
            .then(r => r.json())
            .then(comments => {
                setComments(comments);
        })
    }

    useEffect(() => {
        LoadComments(coffeeId);
    }, [coffeeId]);

    function addComment(newComment) {
        setComments([...comments, newComment])
    }
    function removeComment(comment) {
        setComments(comments.filter(c => c.id !== comment.id))
    }

    return (
        <div className="card">
            <CommentForm comments={comments} setComments={setComments} coffeeId={coffeeId} key={coffeeId} addComment={addComment} />
            <p>Comments</p>
            <ul className="comments">
                { comments.map(c => <CommentItem key={c.id} value={c.id} comment={c} removeComment={removeComment}/> ) }
            </ul>
        </div>
    )
}
export default CommentsList;