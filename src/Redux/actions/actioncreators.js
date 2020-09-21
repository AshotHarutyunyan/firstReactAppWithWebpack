import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST } from "./actiontypes";

export const addNewPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const addComment = (id, comment) => ({ type: ADD_COMMENT, id, comment })
export const deleteComment = (id, commentId) => ({ type: DELETE_COMMENT, id, commentId })