import { films, film, people, person } from "lib/mockData"

describe("MockData", () => {

  it("films should match the snapshot", () => {
    expect(films).toMatchSnapshot()
  })

  it("film should match the snapshot", () => {
    expect(film).toMatchSnapshot()
  })

  it("people should match the snapshot", () => {
    expect(people).toMatchSnapshot()
  })

  it("person should match the snapshot", () => {
    expect(person).toMatchSnapshot()
  })
})