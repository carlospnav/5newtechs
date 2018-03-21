import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import { fetchPolicyList } from "lib/constants"
import peopleQuery from "queries/people"
import css from "theme/variables"
import styled from 'styled-components'
import map from "lodash/map"
import Link from "common/Link"
import Spinner from "common/Spinner"
import ListContainer from '../components/common/ListContainer'
import AvatarContainer from '../components/common/avatarContainer/AvatarContainer'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
`
const Item = styled.li`
  border: 1px solid ${css.color.borderColor};
  border-radius: 6px;
  height: 260px;
  width: 220px;
  margin: 0 10px;
`

const PeopleList = ({ items }) => {
  return (
    <ListContainer main>
      <List>
        {map(items, item => (
          <Item key={item.id}>
            <Link route="person_detail" personId={item.id}>
              <AvatarContainer item={item}/>
            </Link>
          </Item>
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