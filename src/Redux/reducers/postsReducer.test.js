import { createpost } from '../../helpers/postshelper';
import { addNewPost } from '../actions/actioncreators';
import { posts } from './postsReducer'

let initialState = {
    posts: [],
    modaldata: [],
};

it('length of posts should be incremented', () => {
    // 1. test data
    let post = createpost('new post')
    let action = addNewPost(post);

    // 2. action
    let newState = posts(initialState, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);

});