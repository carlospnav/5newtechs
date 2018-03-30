import { shallow, mount } from "enzyme"
import Poster from "./Poster"
import "jest-styled-components"

describe("<Poster>", () => {

  it("should render a Poster properly.", () => {
    const wrapper = shallow(<Poster episode="3" />)
    expect(wrapper.dive()).toMatchSnapshot()
  })

  /* Still debating whether or not to test this. Snapshot diffs should
  indicate if src is being set properly with the episode prop. Decided to 
  write this test for the sake of being thorough. */
  it("should receive episode 3 and pass it on to the img src.", () => {
    const wrapper = mount(<Poster episode="3" />)
    expect(`/static/poster/episode${wrapper.prop('episode')}.jpg`).toEqual(wrapper.find("img").prop("src"))
  })
})