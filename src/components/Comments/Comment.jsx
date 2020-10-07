import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion';

const styles = css`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    padding: 0.5rem;
    border-radius: 15px;
`

const Comment = ({ comment, deleteComment, id }) => {

    const delComment = () => {
        deleteComment(id[0], id[1])
    }

    return (
        <div className={styles} >
            <p>{comment}</p>
            <button onClick={delComment}>X</button>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.string.isRequired,
    id: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

export default Comment
