import React, { useState } from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [], // array to store the comments
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { comments } = this.state;
        // get the input and textarea elements from the form
        const nameInput = event.target.elements.name;
        const commentTextarea = event.target.elements.comment;
        // add a new comment to the comments array
        comments.push({
            name: nameInput.value,
            comment: commentTextarea.value,
        });
        // update the component's state
        this.setState({ comments });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Your name" />
                    <textarea name="comment" placeholder="Leave a comment"></textarea>
                    <input type="submit" value="Post Comment" />
                </form>
            </div>
        );
    }
}
export default CommentSection;

