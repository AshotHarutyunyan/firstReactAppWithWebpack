import { addCommentAc, deleteCommentAc, setModalData } from "../actions/actioncreators";
import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, SET_MODAL_DATA } from "../actions/actiontypes";

let initialState = {
    posts: [],
    modaldata: [],
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
        case SET_MODAL_DATA:
            return {
                ...state,
                modaldata: [...state.posts.filter(item => action.id === item.id)]
            }
        default:
            return state;
    }
};

export const addComment = (id, comment) => (dispatch) => {
    dispatch(addCommentAc(id, comment));
    dispatch(setModalData(id));
};

export const deleteComment = (id, comment) => (dispatch) => {
    dispatch(deleteCommentAc(id, comment));
    dispatch(setModalData(id));
};



