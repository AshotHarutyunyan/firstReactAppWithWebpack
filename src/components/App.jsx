import React from 'react';
import { css, injectGlobal } from 'emotion';
import { connect } from 'react-redux';
import { AddPostForm } from './AddPostForm/AddPostForm';
import {
    addNewPost,
    deletePost,
    addComment,
    deleteComment,
} from '../Redux/actions/actioncreators';
import PropTypes from 'prop-types';
import Posts from './Posts/Posts';

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

const App = ({ addNewPost, posts, deletePost, addComment, deleteComment }) => {
    return (
        <div className={component_styles}>
            <AddPostForm addNewPost={addNewPost} />
            <Posts
                posts={posts}
                deletePost={deletePost}
                addComment={addComment}
                deleteComment={deleteComment}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    showComments: state.posts.showComments
});

const mapDispatchToProps = {
    addNewPost,
    deletePost,
    addComment,
    deleteComment
};

App.propTypes = {
    addNewPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



