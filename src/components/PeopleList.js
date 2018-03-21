import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import { fetchPolicyList } from "lib/constants"
import peopleQuery from "queries/people"
import styled from 'styled-components';
import map from "lodash/map"
import Link from "common/Link"
import Spinner from "common/Spinner"
import ListContainer from '../components/common/ListContainer';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

const PeopleList = ({ items }) => {
  return (
    <ListContainer>
      <List>
        {map(items, item => (
          <li key={item.id}>
            <Link route="person_detail" personId={item.id}>
              <button>{item.name}</button>
            </Link>
          </li>
        ))}
      </List>
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
)(PeopleList);