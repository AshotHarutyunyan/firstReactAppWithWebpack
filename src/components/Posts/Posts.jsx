import React from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post';
import { nanoid } from 'nanoid';

const Posts = ({ posts, deletePost, addComment, deleteComment }) => {
    let items = posts.map(item => {
        let key = nanoid()
        return <Post
            key={key}
            {...item}
            deletePost={deletePost}
            addComment={addComment}
            deleteComment={deleteComment}
        />
    });

    return (
        <div>
            {items}
        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

export default Posts
