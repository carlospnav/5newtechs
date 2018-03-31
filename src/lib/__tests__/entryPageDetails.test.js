import { shallow } from "enzyme"
import { PersonDetailPage } from "../../../pages/person_detail"
import App from "components/App"

describe("<details>", () => {
  let wrapper;

  function details(){
    wrapper = shallow(<PersonDetailPage url={{pathname: "person_detail"}} />)
  }

  beforeEach(details)
  afterEach(() => wrapper = undefined)

  it("should render the proper component tree as expected.", () => {
    expect(wrapper.find(App)).toMatchSnapshot()
  })
})