import { graphql } from "react-apollo"
import { compose, branch, withProps, renderComponent } from "recompose"
import withUrlParam from "lib/withUrlParam"
import { fetchPolicyList } from "lib/constants"
import movieQuery from "queries/movie"
import Spinner from "../common/Spinner"

export function Movies(props) {
  console.log(props);
  return (
    <p>
      Movies! oi!
    </p>
  )
}

export default compose(
  withUrlParam("filmId"),
  graphql(movieQuery, { options: fetchPolicyList }),
  branch(({data}) => data.loading, renderComponent(Spinner)),
  withProps(({ data: { film } }) => ({
    film: film
  }))
)(Movies)