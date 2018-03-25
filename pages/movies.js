import { compose } from "recompose"
import App from "../src/components/App"
import Movies from "../src/components/movies/Movies"
import withData from "../src/lib/withData"
import withSetUrlParams from "../src/lib/withSetUrlParams"

function MoviesPage({ url: { pathname } }){
  return (
    <App>
      <Movies />
    </App>
  )
}

export default compose(withData, withSetUrlParams)(MoviesPage)