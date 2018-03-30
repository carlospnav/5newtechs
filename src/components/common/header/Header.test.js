import { shallow } from "enzyme"
import Header from "./Header"
import "jest-styled-components"

describe("<Header>", () => {
  it("should render a main Header properly.", () => {
    const wrapper = shallow(<Header main/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render a regular Header properly.", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})