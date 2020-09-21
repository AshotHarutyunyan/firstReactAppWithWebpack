import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion';
import AddComentForm from './AddComentForm';
import Comment from './Comment';
import { nanoid } from 'nanoid';

const Comments = (
    {
        id,
        comments,
        setShowComments,
        addComment,
        deleteComment
    }
) => {

    const styles = css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        .comments_container{
            position: fixed;
            left: 50%;
            top: 50%;
            width: 90%;
            height: 90%;
            background: white;
            border-radius: 15px;
            transform: translate(-50%, -50%);
            padding: 1rem;
            display: flex;
            flex-direction: column;
        }
        .comments{
            flex-grow:1
        }
    `

    const items = comments.map(item => {
        let key = nanoid();
        return <Comment
            key={key}
            id={[id, item.id]}
            deleteComment={deleteComment}
            comment={item.value}
        />
    });

    const toggleContainer = useRef(null);

    const onOutClick = (event) => {
        if (!toggleContainer.current.contains(event.target)) {
            setShowComments(false)
        }
    }

    return (
        <div className={styles} onClick={onOutClick} >
            <div className='comments_container' ref={toggleContainer}>
                <div className='comments'>
                    {items}
                </div>
                <AddComentForm id={id} addComment={addComment} />
            </div>
        </div>
    )
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    setShowComments: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default Comments
