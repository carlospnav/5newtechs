import { shallow } from "enzyme"
import DetailsContainer from "./DetailsContainer"
import "jest-styled-components"

describe("<DetailsContainer>", () => {
  it("should render a DetailsContainer properly.", () => {
    const wrapper = shallow(
      <DetailsContainer>
        <p>Containereeee!</p>
      </DetailsContainer>
    )
    expect(wrapper).toMatchSnapshot()
  })
})