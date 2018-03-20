import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import { fetchPolicyList } from "lib/constants"
import peopleQuery from "queries/people"
import map from "lodash/map"
import Link from "common/Link"
import Spinner from "common/Spinner"
import MainContainer from "./common/MainContainer";
import Background from "./common/background/Background";

const PeopleList = ({ items }) => {
  return (
    <ul>
      {map(items, item => (
        <li key={item.id}>
          <Link route="person_detail" personId={item.id}>
            <button>{item.name}</button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default compose(
  graphql(peopleQuery, {
    options: fetchPolicyList
  }),
  branch(props => props.loading, renderComponent(Spinner)),
  withProps(({ data: { allPeople: { people } } }) => ({
    items: people
  }))
)(PeopleList);