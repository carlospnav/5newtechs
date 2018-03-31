import movieGql from "queries/movie"
import peopleGql from "queries/people"
import personGql from "queries/person"

describe("Queries", () => {

  it("movie query should match the snapshot", () => {
    expect(movieGql).toMatchSnapshot()
  })

  it("people query should match the snapshot", () => {
    expect(peopleGql).toMatchSnapshot()
  })

  it("person query should match the snapshot", () => {
    expect(personGql).toMatchSnapshot()
  })
})