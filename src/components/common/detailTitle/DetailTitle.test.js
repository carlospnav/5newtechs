import { shallow } from "enzyme"
import DetailTitle from "./DetailTitle"
import "jest-styled-components"

describe("<DetailTitle>", () => {
  const wrapper = shallow(<DetailTitle />)
  it("Should render a DetailTitle properly.", () => {
    expect(wrapper).toMatchSnapshot()
  })
})