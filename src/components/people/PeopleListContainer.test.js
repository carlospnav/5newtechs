import { shallow } from "enzyme"
import { PeopleListContainer } from "./PeopleListContainer"
import PeopleList from "components/people/peopleList/PeopleList"
import { people } from "lib/mockData"

/* Since I can expect graphql with a tested query to produce the correct results,
I can simply test if PeopleList is being rendered with the correct props.
*/
describe("PeopleListContainer", () =>{
  let wrapper;    

  function peopleList(){
    wrapper = shallow(<PeopleListContainer items={people} />)
  }

  beforeEach(peopleList)
  afterEach(() => wrapper = undefined )

  it("Renders a PeopleList component with people passed as props.", () => {
    expect(wrapper.find(PeopleList).prop("people")).toEqual(people)
  })
})
