import React from "react"
import { mount } from "enzyme"
import Avatar from "./Avatar"


const avatar = (small = false) => {
  return mount(<Avatar small={small}/>)
}

function removePx(value){
  return value.slice(0, value.length - 2);
}

function fishPathforSmall(path){
  return path.slice(0, )
}

describe("Avatar", () =>{
  let wrapper;    
  let img;

  afterEach(() => {
    if (wrapper)
      wrapper.unmount();
  })

  it("always renders an image tag", () => {
    wrapper = avatar();
    img = wrapper.find("img");
    expect(img.length).toBe(1)
  })
})

describe("Avatar when passed 'small' as props", () => {
  let bigWrapper, smallWrapper;
  let bigImg, smallImg;

  beforeEach(() => {
    bigWrapper = avatar();
    smallWrapper = avatar(true);
    bigImg = bigWrapper.find("img");
    smallImg = smallWrapper.find("img");
  })

  afterEach(() => {
    bigWrapper.unmount();
    smallWrapper.unmount();
  })
  
  it("Renders a smaller version of the image tag", () => {
    expect(Number(removePx(bigImg.props().width)))
      .toBeGreaterThan(Number(removePx(smallImg.props().width)))
  })

  it("renders an image with the 'small' suffix appended to the end of it", () => {
    expect(smallImg.props().src).toBe("/static/avatar/icn-avatar-small.svg")
  })
})
