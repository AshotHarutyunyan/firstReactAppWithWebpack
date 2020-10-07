import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import { css } from 'emotion';

const styles = css`
    input {
        width: 100%;
        padding: 10px;
    }
`

const AddComentForm = ({ id, addComment }) => {

    const [value, setvalue] = useState('');

    const onInputChange = (event) => {
        setvalue(event.target.value)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let comment = {
            value,
            id: nanoid()
        }
        addComment(id, comment)
        setvalue('')
    }

    return (
        <form onSubmit={onFormSubmit} className={styles}>
            <input type="text" value={value} onChange={onInputChange} />
        </form>
    )
}

AddComentForm.propTypes = {
    id: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired,
}

export default AddComentForm
