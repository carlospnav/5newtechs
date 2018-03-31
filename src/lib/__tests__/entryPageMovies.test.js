import { shallow } from "enzyme"
import { MoviesPage } from "../../../pages/movies"
import App from "components/App"

describe("<movies>", () => {
  let wrapper;

  function movies(){
    wrapper = shallow(<MoviesPage url={{pathname: "movies"}} />)
  }

  beforeEach(movies)
  afterEach(() => wrapper = undefined)

  it("should render the proper component tree as expected.", () => {
    expect(wrapper.find(App)).toMatchSnapshot()
  })
})