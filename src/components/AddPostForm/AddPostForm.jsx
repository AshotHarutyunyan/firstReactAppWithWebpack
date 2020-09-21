import React, { useState } from 'react'
import { css } from 'emotion';
import { createpost } from '../../helpers/postshelper';
import PropTypes from 'prop-types';

const component_styles = css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem 0;
    background: #ffffff;
    border-radius: 15px;
        h1 {
        color: #1ebe98;
        }
        textarea {
            min-height: 115px;
            resize: none;
            margin: 1rem 0;
            color: #6f6565;
            padding: 5px;
            border-radius: 10px;
            outline:none
        }
        input[type="submit"] {
            max-width: 115px;
            margin-left: auto;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            background: #1ebe98;
            color: #ffffff;
            border: none;
            padding: 5px;
            border-radius: 5px;
            outline: none;
            cursor: pointer
        }
`

export const AddPostForm = ({ addNewPost }) => {
    const [value, setValue] = useState('')

    let changeInputValue = (event) => {
        setValue(event.target.value);
    };

    let submitForm = (event) => {
        event.preventDefault();
        addNewPost(createpost(value));
        setValue('');
    }

    return (
        <form className={component_styles} onSubmit={submitForm} >
            <h1>Add Your Post</h1>
            <textarea value={value} onChange={changeInputValue}></textarea>
            <input type="submit" value="Add Post" />
        </form>
    )
}

AddPostForm.propTypes = {
    addNewPost: PropTypes.func.isRequired,
}
