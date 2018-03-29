import { shallow } from "enzyme"
import { PersonDetail } from "./PersonDetail"
import AvatarContainer from "components/common/avatarContainer/AvatarContainer"
import DetailsContainer from "components/details/detailsContainer/DetailsContainer"
import DetailsInfo from "components/details/detailsInfo/DetailsInfo"
import MovieLinks from "components/details/movieLinks/MovieLinks"
import ReturnButton from "components/common/returnButton/ReturnButton"
import { films, person } from "lib/__tests__/mockData"

describe("<PersonDetail>", () => {
  let wrapper;

  function personDetail(){
    wrapper = shallow(<PersonDetail person={person} films={films}/>)
  }

  beforeEach(personDetail)
  afterEach(() => wrapper = undefined)

  it("renders an AvatarContainer component with the name of the character", () => {
    expect(wrapper.find(AvatarContainer).prop("name")).toEqual("Tauntaun")
  })

  it("renders a DetailsInfo component with the proper details informatio", () => {
    expect(wrapper.find(DetailsInfo).prop("details")).toEqual([
      {
        key:"Homeworld",
        value: "Hoth"
      },
      {
        key:"Gender",
        value: "Male"
      },
      {
        key:"Birth Year",
        value: "1001"
      },
      {
        key:"Skin Color",
        value: "White"
      },
      {
        key:"Hair Color",
        value: "White"
      },
      {
        key:"Eye Color",
        value: "Black"
      }
    ])
  })

  it("renders a MovieLinks component with the films array as props", () => {
    expect(wrapper.find(MovieLinks).prop('films')).toEqual(films)
  })

  it("renders a ReturnButton component with 'people' as path", () => {
    expect(wrapper.find(ReturnButton).prop('to')).toEqual("people")
  })
})