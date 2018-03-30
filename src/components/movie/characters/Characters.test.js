import { shallow } from "enzyme"
import Characters, { Title } from "./Characters"
import CharacterList from "common/characterList/CharacterList"
import { people } from "lib/mockData"

describe("<PersonDetail>", () => {
  let wrapper;

  function personDetail(){
    wrapper = shallow(<Characters items={people} />)
  }

  beforeEach(personDetail)
  afterEach(() => wrapper = undefined)

  it("renders a Character component with 2 children", () => {
    expect(wrapper.children()).toHaveLength(2)
  })

  it("renders a Title component with the text 'Characters'", () => {
    expect(wrapper.find(Title).dive().text()).toEqual("Characters")
  })

  it("renders a CharacterList with people as its props.", () => {
    expect(wrapper.find(CharacterList).prop('items')).toEqual(people)
  })
})