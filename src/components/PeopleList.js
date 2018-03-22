import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import { fetchPolicyList } from "lib/constants"
import peopleQuery from "queries/people"
import Spinner from "common/Spinner"
import PeopleList from "../components/peopleList/PeopleList";
import FilterPeople from "../components/filterPeople/FilterPeople"
import ListContainer from "../components/common/ListContainer"




const PeopleListContainer = ({ items }) => {
  return (
    <ListContainer main>
      <PeopleList people={items} />
    </ListContainer>
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