import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, SET_MODAL_DATA } from "./actiontypes";

export const addNewPost = (post) => ({ type: ADD_POST, post })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const addCommentAc = (id, comment) => ({ type: ADD_COMMENT, id, comment })
export const deleteCommentAc = (id, commentId) => ({ type: DELETE_COMMENT, id, commentId })
export const setModalData = (id) => ({ type: SET_MODAL_DATA, id })