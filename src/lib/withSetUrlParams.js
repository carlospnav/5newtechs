import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { setPath, setParams } from "lib/reducers/url"

export default compose(
  connect(null, { setPath, setParams }),
  lifecycle({
    componentWillMount() {
      this.props.setPath(this.props.url.asPath)
      this.props.setParams(this.props.url.query)
    }
  })
)
