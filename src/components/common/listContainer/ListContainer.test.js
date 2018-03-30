import { shallow } from "enzyme"
import ListContainer from "./ListContainer"
import "jest-styled-components"

describe("<ListContainer>", () => {
  it("should render a ListContainer with its children properly.", () => {
    const wrapper = shallow(
      <ListContainer>
        <h2>I'm a container!</h2>
        <p>Indeed I am!</p>
      </ListContainer>
    )
    expect(wrapper).toMatchSnapshot()
  })
})