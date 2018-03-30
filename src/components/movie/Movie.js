import { graphql } from "react-apollo"
import { compose, branch, withProps, renderComponent } from "recompose"
import withUrlParam from "lib/withUrlParam"
import { fetchPolicyList } from "lib/constants"
import movieQuery from "queries/movie"
import styled from "styled-components"
import Spinner from "common/Spinner"
import Background from "common/background/Background"
import Header from "common/header/Header"
import PageLogo from "common/pageLogo/PageLogo"
import MainContainer from "common/mainContainer/MainContainer"
import MovieDetails from "components/movie/movieDetails/MovieDetails"
import Poster from "components/movie/poster/Poster"
import MovieInfo from "components/movie/movieInfo/MovieInfo"
import Characters from "components/movie/characters/Characters"

const AdjustedContainer = styled(MainContainer)`
  max-width: 1024px;
`

export function Movies({ film }) {
  return (
    <React.Fragment>
      <Background small/>
      <Header>
        <PageLogo small/>
      </Header>
      <AdjustedContainer details>
        <MovieDetails>
          <Poster episode={film.episodeID} />
          <MovieInfo 
            episodeID={film.episodeID}
            title={film.title}
            content={film.openingCrawl}
            release={film.releaseDate}
            director={film.director}
          />
        </MovieDetails>
        <Characters items={film.characterConnection.characters} />
      </AdjustedContainer>
    </React.Fragment>
  )
}

export default compose(
  withUrlParam("filmId"),
  graphql(movieQuery, { options: fetchPolicyList }),
  branch(({data}) => data.loading, renderComponent(Spinner)),
  withProps(({ data: { film } }) => ({
    film: film
  }))
)(Movies)