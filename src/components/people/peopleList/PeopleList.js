import { compose, withState, withProps, withHandlers } from 'recompose'
import styled from 'styled-components'
import FilterPeople from "components/people/filterPeople/FilterPeople"
import CharacterList from "components/common/characterList/CharacterList"

const PeopleList = ({onChange, filteredItems}) => {
  let error = filteredItems.length === 0 ? "It appears our system failed to locate the person you are looking for. Maybe try Hoth?" : false  

  return (
    <React.Fragment>
      <FilterPeople error={error} onChange={onChange}/>
        {(filteredItems.length > 0 ) && (
          <CharacterList items={filteredItems} center />
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
