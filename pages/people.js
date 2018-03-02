import { compose } from "recompose"
import withData from "lib/withData"
import App from "components/App"
import PeopleList from "components/PeopleList"
import withSetUrlParams from "lib/withSetUrlParams"

function PeoplePage({ url: { pathname } }) {
  return (
    <App>
      <PeopleList />
    </App>
  )
}

export default compose(withData, withSetUrlParams)(PeoplePage)
