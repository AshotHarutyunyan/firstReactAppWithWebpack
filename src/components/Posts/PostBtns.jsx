import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const PostBtns = ({ setShowComments }) => {
    const [liked, setliked] = useState(false);

    const onLikeClick = () => {
        setliked(!liked)
    };

    const ButtonsStyled = styled('div')`
        button{
            background: none;
            padding: 0.3rem;
            border-radius: 5px;
            border: 1px solid #c1c1c1;
            margin: 5px 5px 0 0;
            cursor: pointer;
            outline: none;
        }
        .likeButton{
            background: ${props => props.liked ? '#1ebe98' : 'none'};
            color: ${props => props.liked ? '#ffffff' : '#000000'};
        }
    `

    return (
        <ButtonsStyled liked={liked}>
            <button className='likeButton' onClick={onLikeClick}>Like</button>
            <button onClick={() => { setShowComments(true) }}>
                Comments
            </button>
        </ButtonsStyled>
    )
}

PostBtns.propTypes = {
    liked: PropTypes.bool,
    setShowComments: PropTypes.func.isRequired,
}

export default PostBtns
