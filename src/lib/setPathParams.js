import { Router } from "lib/routes"
import pickBy from "lodash/pickBy"
import includes from "lodash/includes"
import isEmpty from "lodash/isEmpty"
import split from "lodash/split"
import queryString from "query-string"

export default function setPathParams(params, state) {
  const queryParams = pickBy(params, (value, key) => {
    const previousValue = state.params[key]
    if (!value) {
      return false
    } else if (isEmpty(previousValue)) {
      return true
    } else {
      return includes(state.path, key)
    }
  })
  const urlQuery = queryString.stringify(queryParams)
  const pathWithoutQuery = split(state.path, "?")[0]
  const separator = urlQuery.length > 0 ? "?" : ""
  const newPath = `${pathWithoutQuery}${separator}${urlQuery}`
  if (typeof window !== "undefined") {
    Router.replaceRoute(newPath, params, { shallow: true })
  }
  return newPath
}
