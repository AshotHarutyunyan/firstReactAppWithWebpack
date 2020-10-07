import React from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post';

const Posts = ({ posts, deletePost, setModalData }) => {
    let items = posts.map(item => {
        return <Post
            key={item.id}
            {...item}
            deletePost={deletePost}
            setModalData={setModalData}
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
    setModalData: PropTypes.func.isRequired,
}

export default Posts
