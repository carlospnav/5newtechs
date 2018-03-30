import { shallow } from "enzyme"
import ContentText from "./ContentText"
import "jest-styled-components"

describe("<ContentText>", () => {
  const wrapper = shallow(<ContentText />)
  it("Should render a ContentText properly.", () => {
    expect(wrapper).toMatchSnapshot()
  })
})