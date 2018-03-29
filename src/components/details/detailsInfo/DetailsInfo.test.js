import { shallow } from "enzyme"
import DetailsInfo from "./DetailsInfo"
import Detail from "components/common/detail/Detail"
import SectionTitle from "components/common/sectionTitle/SectionTitle"

describe("<DetailsInfo>", () => {
  let wrapper;
  const details = [
    {
      value: "123abc",
      key: "UnoDosTres"
    },
    {
      value: "122abb",
      key: "UnoDosDos"
    },
    {
      value: "121aba",
      key: "UnoDosUno"
    }
  ]

  function detailsInfo(){
    wrapper = shallow(<DetailsInfo />)
  }

  beforeEach(detailsInfo)
  afterEach(() => wrapper = undefined)

  it("renders a title that says details.", () => {
    expect(wrapper.find(SectionTitle).dive().text()).toEqual("Details")
  })

  it("Renders 3 Detail components if provided with 3 details as props.", () => {
    wrapper.setProps({ details })
    expect(wrapper.find(Detail)).toHaveLength(3)
  })

  it("renders a detail with a specific value UPPERCASED and label as props.", () => {
    wrapper.setProps({ details: [{ value: "Hoth", key: "Homeworld" }]})
    expect(wrapper.find(Detail).prop("value")).toEqual("HOTH")
    expect(wrapper.find(Detail).prop("label")).toEqual("Homeworld")
  }) 
})