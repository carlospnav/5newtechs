import React from "react"
import { shallow } from "enzyme"
import Detail, { Value, Label, SpacedDetail, RegularDetail } from "./Detail"

describe("<Detail>", () => {
  let wrapper;

  function detail(){
    wrapper = shallow(<Detail spaced={true} value="Valor" label="Label"/>)
  }

  beforeEach(detail)

  afterEach(() => wrapper = undefined)

  it("renders a spaced detail component if 'spaced' is passed as props", () => {
    expect(wrapper.find(SpacedDetail)).toHaveLength(1)
  })

  it("renders a Value component with value props as UPPERCASED text.", () => {
    expect(wrapper.find(Value).dive().text()).toEqual("VALOR")
  })

  it("renders a Label component with label props as text.", () => {
    expect(wrapper.find(Label).dive().text()).toEqual("Label")
  })
})