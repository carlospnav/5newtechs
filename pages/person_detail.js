import { compose } from "recompose"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"
import App from "components/App"
import PersonDetail from "components/PersonDetail"

function PersonDetailPage({ url: { pathname } }) {
  return (
    <App>
      <PersonDetail />
    </App>
  )
}

export default compose(withData, withSetUrlParams)(PersonDetailPage)
