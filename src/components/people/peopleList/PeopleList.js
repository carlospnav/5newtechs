import { compose, withState, withProps, withHandlers } from 'recompose'
import FilterPeople from "components/people/filterPeople/FilterPeople"
import CharacterList from "common/characterList/CharacterList"

export const PeopleList = ({children, onChange, filteredItems}) => {
  let error = filteredItems.length === 0 ? "It appears our system failed to locate the person you are looking for. Maybe try Hoth?" : false  

  return (
    <React.Fragment>
      <FilterPeople error={error} onChange={onChange}/>
        {(filteredItems.length > 0 ) && (
          <div>
          {children}
          </div>
        )}
    </React.Fragment>
  )
}

const PeopleListWithCharacters = ({onChange, filteredItems}) => (
  <PeopleList onChange={onChange} filteredItems={filteredItems}>
    <CharacterList items={filteredItems} center />
  </PeopleList>
)




export const enhance = compose(
  withState('filter', 'updateFilter', ''),
  withHandlers({
    onChange: ({updateFilter}) => event => 
      updateFilter(event.target.value)
  }),
  withProps(({ people, filter }) => ({
    filteredItems: filter.length === 0 ? people : people.filter((person) => 
      filter.toLowerCase() === person.name.slice(0, filter.length).toLowerCase()
  )})
))

export default enhance(PeopleListWithCharacters);

// export const PeopleList = ({onChange, filteredItems}) => {
//   let error = filteredItems.length === 0 ? "It appears our system failed to locate the person you are looking for. Maybe try Hoth?" : false  

//   return (
//     <React.Fragment>
//       <FilterPeople error={error} onChange={onChange}/>
//         {(filteredItems.length > 0 ) && (
//           <CharacterList items={filteredItems} center />
//         )}
//     </React.Fragment>
//   )
// }

// export default compose(
//   withState('filter', 'updateFilter', ''),
//   withHandlers({
//     onChange: ({updateFilter}) => event => 
//       updateFilter(event.target.value)
//   }),
//   withProps(({ people, filter }) => ({
//     filteredItems: filter.length === 0 ? people : people.filter((person) => 
//       filter.toLowerCase() === person.name.slice(0, filter.length).toLowerCase()
//   )})
// ))(PeopleList)