import { shallow } from "enzyme"
import Avatar, { SmallImg, BigImg } from "./Avatar"
import "jest-styled-components"

describe("Avatar", () =>{
  let wrapper;    

  const avatar = () => {
    wrapper = shallow(<Avatar small={true}/>)
  }

  beforeEach(avatar)
  afterEach(() => wrapper = undefined)

  it("renders a small Avatar if 'small' props is passed as true.", () => {
    expect(wrapper.find(SmallImg)).toHaveLength(1)
    expect(wrapper.find(SmallImg).dive().dive()).toMatchSnapshot()
  })

  it("renders a small Avatar if 'small' props is passed as true.", () => {
    wrapper.setProps({small: false})
    expect(wrapper.find(BigImg)).toHaveLength(1)
    expect(wrapper.find(BigImg).dive().dive()).toMatchSnapshot()
  })
})
