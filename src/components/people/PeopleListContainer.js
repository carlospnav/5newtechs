import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import { fetchPolicyList } from "lib/constants"
import peopleQuery from "queries/people"
import Spinner from "common/Spinner"
import PeopleList from "components/people/peopleList/PeopleList";

export const PeopleListContainer = ({ items }) => {
  return (
    <PeopleList people={items} />
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
)(PeopleListContainer);