import React, { useState } from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = () => {
    const [comments, setComments] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // get the input and textarea elements from the form
        const nameInput = event.target.elements.name;
        const commentTextarea = event.target.elements.comment;
    
        // check if the name and comment fields are not empty
        if (nameInput.value.trim() === "" || commentTextarea.value.trim() === "") {
            alert("Name and comment fields cannot be empty!");
            return;
        }
    
        // add a new comment to the comments array
        const newComment = {
            name: nameInput.value,
            comment: commentTextarea.value,
        }
        setComments([...comments, newComment]);
        // clear the form fields
        nameInput.value = '';
        commentTextarea.value = '';
    }
    

    return (
        <div className="comment-section">
            <form onSubmit={handleSubmit} className="form-style">
                <div className="form-input-box">
                    <input type="text" name="name" placeholder="Your name" className="form-control name-input" />
                    <textarea name="comment" placeholder="Leave a comment" className="form-control comment-textarea"></textarea>
                    <input type="submit" value="Post Comment" className="btn btn-primary post-comment-button" />
                </div>
            </form>
            <div className="comments-style">
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        author={comment.name}
                        text={comment.comment}
                    />
                ))}
            </div>
        </div>
    );
}
export default CommentSection;
