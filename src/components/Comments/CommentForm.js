import React, {useState} from 'react';

function CommentForm({coffeeId, addComment}){

    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    function handleNewComment(e) {
        e.preventDefault()
        const newComment = {
          text: text,
          author: author,
          coffee_id: coffeeId
        }

        fetch(`http://localhost:4000/comments`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newComment)
        });

        setText('');
        setAuthor('');
        addComment(newComment);
    }
    

    return (
        <div>
            <form onSubmit={handleNewComment}>
        
            <input type="text" name="author" placeholder="Your name..." value={author} onChange={(e)=>{
                    setAuthor(e.target.value)
                    }}
                />
                
                <input type="text" name="text" placeholder="type new comment..." value={text} onChange={(e)=>{
                    setText(e.target.value)
                    }}
                />
                <button className="button">add comment</button>
            </form>
        </div>
    );
}


export default CommentForm;