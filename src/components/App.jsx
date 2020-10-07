import React from 'react';
import { css, injectGlobal } from 'emotion';
import { connect } from 'react-redux';
import { AddPostForm } from './AddPostForm/AddPostForm';
import { addNewPost, deletePost, setModalData } from '../Redux/actions/actioncreators';
import { addComment, deleteComment } from '../Redux/reducers/postsReducer'
import PropTypes from 'prop-types';
import Posts from './Posts/Posts';
import Modal from './Comments/Modal';

const component_styles = css`
    max-width: 800px;
    width: 100%;
    height: 100%;
`

injectGlobal`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #f6f7f9;
    }
    #root {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
`

const App = ({ addNewPost, posts, deletePost, addComment, deleteComment, modaldata, setModalData }) => {
    return (
        <div className={component_styles}>
            <AddPostForm addNewPost={addNewPost} />
            <Posts
                posts={posts}
                deletePost={deletePost}
                setModalData={setModalData}
            />
            {modaldata.length !== 0 &&
                <Modal
                    data={modaldata[0]}
                    setModalData={setModalData}
                    addComment={addComment}
                    deleteComment={deleteComment}
                />
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    modaldata: state.posts.modaldata
});

const mapDispatchToProps = {
    addNewPost,
    deletePost,
    addComment,
    deleteComment,
    setModalData
};

App.propTypes = {
    addNewPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    modaldata: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



