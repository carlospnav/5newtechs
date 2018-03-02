import { compose, withProps } from "recompose"
import Router from "./router"
import withUrlParam from "./withUrlParam"

const enhance = compose(
  withUrlParam("returnTo"),
  withProps(props => ({ router: Router(props) }))
)

export default function withRouter(Component) {
  return enhance(Component)
}
