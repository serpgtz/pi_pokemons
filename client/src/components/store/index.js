import {applyMiddleware, createStore, compose} from  "redux"

import reducer from "../reducer"
import thunk from "redux-thunk"


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;