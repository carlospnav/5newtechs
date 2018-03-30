import { shallow } from "enzyme"
import MainContainer from "./MainContainer"
import "jest-styled-components"

describe("<MainContainer>", () => {
  it("should render a detailed MainContainer properly.", () => {
    const wrapper = shallow(<MainContainer details/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render a regular MainContainer properly.", () => {
    const wrapper = shallow(<MainContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})