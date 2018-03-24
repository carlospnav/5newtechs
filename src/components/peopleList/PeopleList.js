import { compose, withState, withProps, withHandlers } from 'recompose'
import styled from 'styled-components'
import css from "theme/variables"
import { flexGroup } from "theme/utils"
import map from "lodash/map"
import Link from "common/Link"
import FilterPeople from "../filterPeople/FilterPeople"
import Avatar from "../common/avatar/Avatar"


const List = styled.ul`
display: flex;
flex-flow: row wrap;
justify-content: center;
padding: 0;
margin: 0;
`

const Item = styled.li`
  ${flexGroup("column", "center", "center")};
  border: 1px solid ${css.color.borderColor};
  border-radius: 6px;
  height: 260px;
  width: 220px;
  margin: 0 10px 20px 10px;
`

const Name = styled.h2`
  color: #a0a9ab;
  font-size: 18px;
  font-weight: ${css.fontWeight.regular};
  font-family: ${css.font.roboto};
  margin: 30px 0 0 0;
  &:hover{ 
    font-weight: ${css.fontWeight.bold};
    cursor: pointer;
   }
`

const PeopleList = ({onChange, filteredItems}) => {
  let error = filteredItems.length === 0 ? "It appears our system failed to locate the person you are looking for. Maybe try Hoth?" : false  

  return (
    <React.Fragment>
      <FilterPeople error={error} onChange={onChange}/>
        {(filteredItems.length > 0 ) && (
          <List>
            {map(filteredItems, item => (
              <Item key={item.id}>
                <Avatar small/>
                <Link route="person_detail" personId={item.id}>
                  <Name>{item.name}</Name>
                </Link>
              </Item>
            ))}
          </List>
        )}
    </React.Fragment>
  )
} 

export default compose(
  withState('filter', 'updateFilter', ''),
  withHandlers({
    onChange: ({updateFilter}) => event => 
      updateFilter(event.target.value)
  }),
  withProps(({ people, filter }) => ({
    filteredItems: filter.length === 0 ? people : people.filter((person) => 
      filter.toLowerCase() === person.name.slice(0, filter.length).toLowerCase()
  )})
))(PeopleList);
