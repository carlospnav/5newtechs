import { shallow } from "enzyme"
import SearchIcon from "./SearchIcon"
import "jest-styled-components"

describe("<SearchIcon>", () => {
  it("should render a SearchIcon properly.", () => {
    const wrapper = shallow(<SearchIcon />)
    expect(wrapper).toMatchSnapshot()
  })
})