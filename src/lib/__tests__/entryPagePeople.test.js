import { shallow } from "enzyme"
import { PeoplePage } from "../../../pages/people"
import App from "components/App"

describe("<people>", () => {
  let wrapper;

  function people(){
    wrapper = shallow(<PeoplePage url={{pathname: "people"}} />)
  }

  beforeEach(people)
  afterEach(() => wrapper = undefined)

  it("should render the proper component tree as expected.", () => {
    expect(wrapper.find(App)).toMatchSnapshot()
  })
})