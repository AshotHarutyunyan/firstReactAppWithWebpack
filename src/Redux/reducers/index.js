import { combineReducers } from "redux";
import { posts } from "./postsReducer";

let reducers = combineReducers({
    posts,
});

export default reducers;
