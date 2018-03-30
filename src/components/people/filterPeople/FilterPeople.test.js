import { shallow } from "enzyme"
import FilterPeople, { Input } from "./FilterPeople"
import "jest-styled-components"

/* I'm not testing for a search icon because I figured the 
snapshots already expect an image. */
describe("<FilterPeople>", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<FilterPeople />))
  afterEach(() => wrapper = undefined)

  it("should render a FilterPeople component with no errors properly.", () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it("should render a FilterPeople component with an error message properly.", () => {
    wrapper.setProps({error: "There was an error!"})
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it("should render the Input component defined in its file properly.", () => {
    expect(wrapper.find(Input).dive()).toMatchSnapshot()
  })
})