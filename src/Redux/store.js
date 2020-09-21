import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let Store = createStore(reducers, applyMiddleware(thunk));

window.store = Store;

export default Store;