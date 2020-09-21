import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion';
import PostBtns from './PostBtns';
import Comments from './Comments/Comments';

export const Post = (
    {
        id,
        comments,
        value,
        date,
        deletePost,
        addComment,
        deleteComment,
    }
) => {
    const [showcomments, setshowcomments] = useState(false);

    const component_styles = css`
        padding: 1rem;
        margin: 1rem 0;
        background: #ffffff;
        border-radius: 15px;
    `

    const dflex = css`
        display: flex;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #c1c1c1;
        padding: 5px 0;
        button{
            background: none;
            border: none;
            cursor: pointer;
        }
    `

    let delPost = () => {
        deletePost(id)
    };

    return (
        <div className={component_styles}>
            <div className={dflex}>
                <div>
                    <h4>Admin</h4>
                    <p>{date}</p>
                </div>
                <button onClick={delPost}>X</button>
            </div>
            <p>{value}</p>
            <PostBtns setShowComments={setshowcomments} />
            {showcomments &&
                <Comments
                    comments={comments}
                    setShowComments={setshowcomments}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    id={id}
                />
            }
        </div>
    )
}

Post.propTypes = {
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
}