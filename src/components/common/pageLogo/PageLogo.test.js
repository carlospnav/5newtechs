import { shallow } from "enzyme"
import PageLogo, { SmallImg, BigImg } from "./PageLogo"

describe("<PageLogo>", () => {
  let wrapper;

  function pageLogo(){
    wrapper = shallow(<PageLogo small={true}/>)
  }

  beforeEach(pageLogo)
  afterEach(() => wrapper = undefined)

  it("renders the small logo component if 'small' is passed as props", () => {
    expect(wrapper.find(SmallImg)).toHaveLength(1)
  })

  it("renders the big logo component if 'small' prop is falsy", () => {
    wrapper.setProps({ small: false })
    expect(wrapper.find(BigImg)).toHaveLength(1)
  })

  it("renders the small version of the logo image if 'small' is passed as props", () => {
    expect(wrapper.find(SmallImg).dive().prop('src')).toEqual("/static/logo/logo-small.svg")
  })
})