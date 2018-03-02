import { connect } from "react-redux"

export default function withUrlParam(...keys) {
  return connect(({ url }) =>
    keys.reduce(
      (map, key) => ({
        ...map,
        [key]: url.params[key]
      }),
      {}
    )
  )
}
