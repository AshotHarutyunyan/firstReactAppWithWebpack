import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion';
import PostBtns from './PostBtns';

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

export const Post = (
    {
        id,
        value,
        date,
        deletePost,
        setModalData
    }
) => {

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
            <PostBtns setModalData={setModalData} id={id} />

        </div>
    )
}

Post.propTypes = {
    value: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    setModalData: PropTypes.func.isRequired,
}