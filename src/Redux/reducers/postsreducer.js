import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST } from "../actions/actiontypes";

let initialState = {
    posts: [],
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.id)
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            comments: [...item.comments, action.comment]
                        }
                    }
                    return item
                })
            }
        case DELETE_COMMENT:
            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            comments: item.comments.filter(item => item.id !== action.commentId)
                        }
                    }
                    return item
                })
            }
        default:
            return state;
    }
};



