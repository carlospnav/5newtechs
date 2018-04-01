import React from "react"
import { mount } from "enzyme"
import Detail, { Value, Label, SpacedDetail, RegularDetail } from "./Detail"
import "jest-styled-components"

describe("<Detail>", () => {
  let wrapper;

  function detail(){
    wrapper = mount(<Detail spaced={true} value="Valor" label="Label"/>)
  }

  beforeEach(detail)

  afterEach(() => wrapper = undefined)

  it("renders a spaced detail component if 'spaced' is passed as props", () => {
    expect(wrapper.find(SpacedDetail)).toMatchSnapshot()
  })

  it("renders a regular detail component if 'spaced' is NOT passed as props", () => {
    wrapper.setProps({ spaced: false})
    expect(wrapper.find(RegularDetail)).toMatchSnapshot()
  })

  it("renders a Value component with value props as UPPERCASED text if component is NOT SPACED.", () => {
    wrapper.setProps({ spaced: false})
    expect(wrapper.find(Value).text()).toEqual("VALOR")
  })

  it("renders a Label component with label props as text.", () => {
    expect(wrapper.find(Label).text()).toEqual("Label")
  })

  it("renders a Value component with value props as text.", () => {
    expect(wrapper.find(Value).text()).toEqual("Valor")
  })
})