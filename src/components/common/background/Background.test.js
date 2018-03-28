import React from "react"
import { shallow, mount } from "enzyme"
import Background, { SmallBackGroundContainer, LargeBackGroundContainer} from "./Background"
import BackgroundImage, { LargeImg, SmallImg } from "./BackgroundImage"

describe("<BackgroundImage>", () => { 
  let wrapper;

  function backgroundImage(){
    wrapper = shallow(<BackgroundImage />)
  }

  beforeEach(backgroundImage)
  afterEach(() => wrapper = undefined)

  it("renders a large image if no 'small' props are passed.", () => {
    expect(wrapper.find(LargeImg)).toHaveLength(1)
  })

  it("renders a small image if 'small' props are passed.", () => {
    wrapper.setProps({small: true})

    expect(wrapper.find(SmallImg)).toHaveLength(1)
  })

})

describe("<Background>", () => {
  let wrapper;

  function background(){
    wrapper = shallow(<Background />)
  }

  function deepBackground(){
    wrapper = mount(<Background />)
  }

  beforeEach(background)

  afterEach(() => wrapper = undefined)

  it("should render an image as a child of the container.", () => {
    deepBackground();
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it("should render a large background if 'small' is NOT passed as props", () => {
    expect(wrapper.find(LargeBackGroundContainer)).toHaveLength(1)
  })

  it("should render a small background if 'small' is passed as props", () => {
    wrapper.setProps({ small: true})

    expect(wrapper.find(SmallBackGroundContainer)).toHaveLength(1)
  })
})