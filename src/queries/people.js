import gql from "graphql-tag"

export default gql`
  query {
    allPeople {
      people {
        id
        name
      }
    }
  }
`
