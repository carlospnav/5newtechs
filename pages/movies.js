import { compose } from "recompose"
import App from "components/App"
import Movie from "components/movie/Movie"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"

function MoviesPage({ url: { pathname } }){
  return (
    <App>
      <Movie />
    </App>
  )
}

export default compose(withData, withSetUrlParams)(MoviesPage)