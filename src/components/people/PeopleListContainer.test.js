import { shallow } from "enzyme"
import { PeopleListContainer } from "./PeopleListContainer"
import FilterPeople from "../filterPeople/FilterPeople"
import CharacterList from "common/characterList/CharacterList"
import { people } from "lib/mockData"

/* Since I can expect withHandler, withState and withProps to work properly
I figured I just needed to make sure the function used as callback to start
the chain of events that leads to the filter action was being correctly passed
on to the Filter component. */
describe("PeopleListContainer", () =>{
  let wrapper;    
  const mockFn = jest.fn()

  function peopleList(){
    wrapper = shallow(<PeopleListContainer items={people} />)
  }

  beforeEach(peopleList)
  afterEach(() => wrapper = undefined )

  it("passes withHandler function on to the filter component.", () => {
    expect(wrapper.find(FilterPeople).prop("onChange")).toEqual(mockFn)
  })
})
