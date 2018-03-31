import React from "react"
import { shallow } from "enzyme"
import AvatarContainer, { Name } from "./AvatarContainer"
import Avatar from "../avatar/Avatar"
import "jest-styled-components"

function avatarContainer(){
  return shallow(<AvatarContainer name="foo"/>)
}

describe("AvatarContainer", () =>{
  let wrapper;

  beforeEach(() => wrapper = avatarContainer())
  afterEach(() => wrapper = undefined )

  it("renders an AvatarContainer properly", () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it("renders the name component properly.", () => {
    expect(wrapper.find(Name).dive()).toMatchSnapshot()
    expect(wrapper.find(Name).dive().text()).toEqual("foo")
  })

  it("always renders an `Avatar`", () => {
     expect(wrapper.find(Avatar)).toHaveLength(1);
  });
})