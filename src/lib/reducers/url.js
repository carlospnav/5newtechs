import setPathParams from "lib/setPathParams"

const SET_PATH = "URL/SET_PATH"
const SET_PARAMS = "URL/SET_PARAMS"
const SET_QUERY = "URL/SET_QUERY"
const SET_ROLE_ID = "URL/SET_ROLE_ID"
const SET_STARTED_ON = "URL/SET_STARTED_ON"
const SET_SERVED_ON = "URL/SET_SERVED_ON"

const initialState = {
  path: null,
  params: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PATH: {
      const path = action.data
      return { ...state, path }
    }
    case SET_PARAMS: {
      const params = action.data
      return { ...state, params }
    }
    case SET_QUERY: {
      const query = action.data
      const params = { ...state.params, query }
      const path = setPathParams(params, state)
      return { ...state, path, params }
    }
    case SET_ROLE_ID: {
      const roleId = action.data
      const params = { ...state.params, roleId }
      const path = setPathParams(params, state)
      return { ...state, path, params }
    }
    case SET_STARTED_ON: {
      const startedOn = action.data
      const params = { ...state.params, startedOn }
      const path = setPathParams(params, state)
      return { ...state, path, params }
    }
    case SET_SERVED_ON: {
      const servedOn = action.data
      const params = { ...state.params, servedOn }
      const path = setPathParams(params, state)
      return { ...state, path, params }
    }
    default:
      return state
  }
}

export function setPath(path) {
  return { type: SET_PATH, data: path }
}

export function setParams(params) {
  return { type: SET_PARAMS, data: params }
}

export function setQuery(query) {
  return { type: SET_QUERY, data: query }
}

export function setRoleId(roleId) {
  return { type: SET_ROLE_ID, data: roleId }
}

export function setStartedOn(startedOn) {
  return { type: SET_STARTED_ON, data: startedOn }
}

export function setServedOn(servedOn) {
  return { type: SET_SERVED_ON, data: servedOn }
}
