import { shallow } from "enzyme"
import MovieInfo, { AdjustedTitle, AdjustedSectionTitle, Section } from "./MovieInfo"
import { film } from "lib/mockData"
import ContentText from "common/contentText/ContentText"
import Detail from "common/detail/Detail"

describe("<MovieInfo>", () => {
  let wrapper;

  function personDetail(){
    wrapper = shallow(<MovieInfo {...film} />)
  }

  beforeEach(personDetail)
  afterEach(() => wrapper = undefined)

  it("renders a section component", () => {
    expect(wrapper.find(Section)).toHaveLength(1)
  })

  it("should render an AdjustedSectionTitle with the title 'Film'", () => {
    expect(wrapper.find(AdjustedSectionTitle).dive().dive().text()).toEqual("Film")
  })

  it("should render an Adjusted Title component that outputs the proper formatted title.", () => {
    expect(wrapper.find(AdjustedTitle).dive().dive().text()).toEqual("Star Wars: Episode I: A First Hope Returns Wars")
  })

  it("should render the ContentText component with the appropriate content.", () => {
    expect(wrapper.find(ContentText).dive().text()).toEqual("Damn you, openingCrawl!")
  })

  it("should render two spaced Detail components.", () => {
    const details = wrapper.find(Detail)

    expect(details).toHaveLength(2)
    details.forEach((detail) => {
      expect(detail.prop('spaced')).toEqual(true)
    })
  })

  it("should render a spaced Detail components with the release date as props.", () => {
    expect(wrapper.find(Detail).first().prop("value")).toEqual("2009")
  })

  it("should render a spaced Detail components with the director as props.", () => {
    expect(wrapper.find(Detail).get(1).props.value).toEqual("Michael Bay")
  })
})