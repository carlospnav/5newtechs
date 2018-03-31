import { shallow } from "enzyme"
import App from "./App"
import "jest-styled-components"

describe("<App>", () => {


  it("should render an app with its children properly.", () => {
    const wrapper = shallow(
      <App>
        <p>Here comes the app!</p>
      </App>
    )

    expect(wrapper.dive()).toMatchSnapshot()
  })
})