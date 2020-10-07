import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

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

const PostBtns = React.memo(({ setModalData, id }) => {
    const [liked, setliked] = useState(false);

    const onLikeClick = () => {
        setliked(!liked)
    };

    const setModal = () => {
        setModalData(id)
    };

    return (
        <ButtonsStyled liked={liked}>
            <button className='likeButton' onClick={onLikeClick}>Like</button>
            <button onClick={setModal}>
                Comments
            </button>
        </ButtonsStyled>
    )
}
)

PostBtns.displayName = "PostBtns"

PostBtns.propTypes = {
    liked: PropTypes.bool,
    id: PropTypes.string,
    setModalData: PropTypes.func.isRequired,
}

export default PostBtns
