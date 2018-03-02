import { compose, withHandlers } from "recompose"
import withRouter from "./withRouter"

export default function withGoBack(fallbackGoTo) {
  return compose(
    withRouter,
    withHandlers({
      goBack: ({ router }) => router.goBack(fallbackGoTo(router))
    })
  )
}
