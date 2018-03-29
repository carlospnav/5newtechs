import { shallow } from "enzyme"
import ReturnButton, { Button } from "./ReturnButton"
import Link from "components/common/Link"

describe("<ReturnButton>", () => {
  let wrapper;

  function returnButton(){
    wrapper = shallow(<ReturnButton to="person_details" />)
  }

  beforeEach(returnButton)
  afterEach(() => wrapper = undefined)

  it("renders a link to a specific path passed on to the component as 'to' props", () => {
    expect(wrapper.find(Link).prop('route')).toEqual("person_details")
  })

  it("renders a button inside the link component", () => {
    expect(wrapper.find(Link).find(Button).name()).toEqual("styled.button")
  })
})