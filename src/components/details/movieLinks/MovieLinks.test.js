import { shallow } from "enzyme"
import MovieLinks, { Film, SLink, ColoredLink } from "./MovieLinks"
import SectionTitle from "components/common/sectionTitle/SectionTitle"
import { films } from "lib/__tests__/mockData"

describe("<MovieLinks>", () => {
  let wrapper;

  function detailsInfo(){
    wrapper = shallow(<MovieLinks films={films}/>)
  }

  beforeEach(detailsInfo)
  afterEach(() => wrapper = undefined)

  it("renders a title that says details.", () => {
    expect(wrapper.find(SectionTitle).dive().text()).toEqual("Films")
  })

  it("renders 3 Film components if provided with 3 films as props.", () => {
    expect(wrapper.find(Film)).toHaveLength(3)
  })

  it("renders each link with the correct route and id.", () => {
    wrapper.find(SLink).forEach((element, index) => {
      expect(element.prop("route")).toEqual("movies")
      expect(element.prop("filmId")).toEqual(films[index].id)
    });
  })

  it("renders a ColoredLink component with the proper formatted title.", () => {
    expect(wrapper.find(ColoredLink).first().dive().text()).toEqual("Star Wars: Episode I: A New Hope (2010)")
  })
})