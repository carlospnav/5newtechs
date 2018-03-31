import { shallow } from "enzyme"
import Characters, { Title } from "./Characters"
import CharacterList from "common/characterList/CharacterList"
import { people } from "lib/mockData"
import "jest-styled-components"

describe("<PersonDetail>", () => {
  let wrapper;

  function personDetail(){
    wrapper = shallow(<Characters items={people} />)
  }

  beforeEach(personDetail)
  afterEach(() => wrapper = undefined)

  it("renders a characters list properly.", () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it("renders the Title component properly.", () => {
    expect(wrapper.find(Title).dive()).toMatchSnapshot()
  })

  it("renders a CharacterList with people as its props.", () => {
    expect(wrapper.find(CharacterList).prop('items')).toEqual(people)
  })
})