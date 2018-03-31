import { shallow } from "enzyme"
import { PeopleList } from "./PeopleList"
import FilterPeople from "../filterPeople/FilterPeople"
import CharacterList from "common/characterList/CharacterList"
import { people } from "lib/mockData"

/* Since I can expect withHandler, withState and withProps to work properly
I figured I just needed to make sure the function used as callback to start
the chain of events that leads to the filter action was being correctly passed
on to the Filter component. */
describe("PeopleList", () =>{
  let wrapper;    
  const mockFn = jest.fn()

  function peopleList(){
    wrapper = shallow(<PeopleList onChange={mockFn} filteredItems={people} />)
  }

  beforeEach(peopleList)
  afterEach(() => wrapper = undefined )

  it("passes withHandler function on to the filter component.", () => {
    expect(wrapper.find(FilterPeople).prop("onChange")).toEqual(mockFn)
  })

  it("renders FilterPeople with an errorMessage if filteredItems is empty.", () =>{
    wrapper.setProps({filteredItems: []})
    expect(wrapper.find(FilterPeople).prop("error")).toEqual("It appears our system failed to locate the person you are looking for. Maybe try Hoth?")
  })

  it("does not render CharacterList if filteredItems is empty.", () =>{
    wrapper.setProps({filteredItems: []})
    expect(wrapper.find(CharacterList)).toHaveLength(0)
  })

  it("renders CharacterList component with the filteredItems and center props.", () => {
    expect(wrapper.find(CharacterList).prop("items")).toEqual(people)
    expect(wrapper.find(CharacterList).prop("center")).toEqual(true)
  })
})
