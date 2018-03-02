import gql from "graphql-tag"

export default gql`
  query GetPerson($personId: ID!) {
    person(id: $personId) {
      id
      name
      gender
      birthYear
      eyeColor
      hairColor
      height
      mass
      skinColor
      homeworld {
        name
      }
      filmConnection {
        totalCount
        films {
          id
          title
        }
      }
    }
  }
`
