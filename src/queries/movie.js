import gql from "graphql-tag"

export default gql`
  query GetFilm($filmId: ID!) {
    film(id: $filmId) {
      id
      episodeID
      title
      openingCrawl
      releaseDate
      director
      characterConnection {
        characters{
          id
          name
        }
      }
    }
  }
`