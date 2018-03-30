import { shallow } from "enzyme"
import SectionTitle from "./SectionTitle"
import "jest-styled-components"

describe("<SectionTitle>", () => {
  it("should render a SectionTitle properly.", () => {
    const wrapper = shallow(<SectionTitle />)
    expect(wrapper).toMatchSnapshot()
  })
})