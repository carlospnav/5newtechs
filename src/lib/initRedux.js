import { createStore, combineReducers, compose } from "redux"
import url from "./reducers/url"

let reduxStore = null

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

function create() {
  return createStore(
    combineReducers({
      // Setup reducers
      url
    }),
    compose(devtools)
  )
}

export default function initRedux() {
  if (!process.browser) {
    return create()
  }

  if (!reduxStore) {
    reduxStore = create()
  }

  return reduxStore
}
