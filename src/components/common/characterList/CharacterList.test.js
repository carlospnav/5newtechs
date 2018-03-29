import React from "react"
import { shallow } from "enzyme"
import CharacterList, { CenterList } from "./CharacterList"
import Avatar from "components/common/avatar/Avatar"
import Link from "components/common/Link"

describe("<CharacterList>", () => {

  const items = [
    {
      id: "123",
      name: "UnoDosTres"
    },
    {
      id: "122",
      name: "UnoDosDos"
    },
    {
      id: "121",
      name: "UnoDosUno"
    }
  ]

  let wrapper;

  function characterList(){
    wrapper = shallow(<CharacterList center={true}/>)
  }

  beforeEach(characterList)

  afterEach(() => wrapper = undefined)

  it("renders a center justified list if 'center' is passed as props", () => {
    expect(wrapper.find(CenterList)).toHaveLength(1)
  })

  it("Renders 3 Avatars if provided with 3 characters as props.", () => {
    wrapper.setProps({ items })
    expect(wrapper.find(Avatar)).toHaveLength(3)
  })

  it("renders a link to the specific person_detail for each character", () => {
    wrapper.setProps({ items: [{ id: "1", name: "Uno" }]})
    expect(wrapper.find(Link).props().route).toEqual("person_detail")
    expect(wrapper.find(Link).props().personId).toEqual("1")
  }) 
})