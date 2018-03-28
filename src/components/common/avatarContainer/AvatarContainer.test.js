import React from "react"
import { shallow } from "enzyme"
import AvatarContainer, { Name } from "./AvatarContainer"
import Avatar from "../avatar/Avatar"

function avatarContainer(){
  return shallow(<AvatarContainer name="foo"/>)
}

describe("AvatarContainer", () =>{
  let mountedAvatarContainer;

  beforeEach(() => {
    mountedAvatarContainer = avatarContainer();
  })

  afterEach(() => {
    mountedAvatarContainer = undefined;
  })

  it("always renders an `Avatar`", () => {
     expect(mountedAvatarContainer.find(Avatar)).toHaveLength(1);
  });

  it("always renders a Name", () => {
    expect(mountedAvatarContainer.find(Name)).toHaveLength(1);
  });

  it("renders the name passed to it as props", () =>{
    expect(mountedAvatarContainer.find(Name).props().children).toBe("foo");   
  })
})