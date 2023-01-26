import React, { useState } from 'react';
import './Comment.css';

const Comment = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedComment, setUpdatedComment] = useState({
        text: props.text
    });

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
        // Save the updated comment to the backend here
    }

    const handleDeleteClick = () => {
        // Delete the comment from the backend here
    }

    const handleTextChange = (event) => {
        setUpdatedComment({
            ...updatedComment,
            text: event.target.value
        });
    }

    return (
        <div className="comment">
            <div className="comment-header">
                <span className="comment-author">{props.author}</span>
                <span className="comment-timestamp">{props.timestamp}</span>
            </div>
            <div className="comment-body">
                {isEditing ? (
                    <div>
                        <textarea className="form-control edit-textarea" value={updatedComment.text} onChange={handleTextChange}></textarea>
                        <div className="edit-buttons">
                            <button className="btn btn-success save-button" onClick={handleSaveClick}>Save</button>
                            <button className="btn btn-danger delete-button" onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="comment-text">{updatedComment.text}</p>
                        <div className="edit-buttons">
                            <button className="btn btn-primary edit-button" onClick={handleEditClick}>Edit</button>
                            <button className="btn btn-danger delete-button" onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Comment;
