import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import * as actions from "./actions"
import * as reducers from "./reducers"

export { actions }
export default createStore(
  combineReducers(reducers),
  JSON.parse(localStorage.getItem("App_store" || "")) || {},
  applyMiddleware(thunk)
)
