import { shallow } from "enzyme"
import ErrorMessage from "./ErrorMessage"
import "jest-styled-components"

describe("<ErrorMessage>", () => {
  const wrapper = shallow(<ErrorMessage>This is an error!</ErrorMessage>)
  it("Should render an ErrorMessage properly.", () => {
    expect(wrapper).toMatchSnapshot()
  })
})