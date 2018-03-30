import { shallow } from "enzyme"
import MovieDetails from "./MovieDetails"
import "jest-styled-components"

describe("<MovieDetails>", () => {
  it("should render a MovieDetails properly.", () => {
    const wrapper = shallow(<MovieDetails />)
    expect(wrapper).toMatchSnapshot()
  })
})