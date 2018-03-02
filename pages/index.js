import { compose } from "recompose"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"
import PeopleList from "components/PeopleList"
import App from "components/App"

function IndexPage({ url: { pathname } }) {
  return (
    <App>
      <PeopleList />
    </App>
  )
}

export default compose(withData, withSetUrlParams)(IndexPage)
