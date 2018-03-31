import { mount } from "enzyme"
import { enhance, PeopleList } from "./PeopleList"
import { people, person } from "lib/mockData"


/*Testing only whether the filter created is functioning as it should. Errors
with the Filter component and the character list are tested in their own files. */
describe("PeopleList", () =>{
  let wrapper;
  const MockPeopleList = ({onChange, filteredItems}) => (
    <PeopleList onChange={onChange} filteredItems={filteredItems}>
      <p>Test.</p>
    </PeopleList>
  )
  
  const MockPeopleListEnhanced = enhance(MockPeopleList)    

  function peopleList(){
    wrapper = mount(<MockPeopleListEnhanced  people={people} />)
  }

  beforeEach(peopleList)
  afterEach(() => wrapper.unmount() )

  it("should render a PeopleList component with all elements passed as 'people'.", () => {
    expect(wrapper.find(PeopleList).prop("filteredItems")).toEqual(people)
  })
  
  it("should render a filtered PeopleList component with a subset of elements passed as 'people' if onChange is called with a filter.", () => {
    wrapper.find("input").simulate("change", { target: { value: "Ta" } })
    expect(wrapper.find(PeopleList).prop("filteredItems")).toEqual([person])
  })

  it("should render a filtered PeopleList component with a subset of elements passed as 'people' if onChange is called with a filter.", () => {
    wrapper.find("input").simulate("change", { target: { value: "Ta" } })
    expect(wrapper.find(PeopleList).prop("filteredItems")).toEqual([person])
  })
})
