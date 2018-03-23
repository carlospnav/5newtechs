import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import map from "lodash/map"
import personQuery from "queries/person"
import withUrlParam from "lib/withUrlParam"
import { fetchPolicyList } from "lib/constants"
import Link from "common/Link"
import Spinner from "common/Spinner"
import MainContainer from "./common/MainContainer";
import AvatarContainer from "../components/common/avatarContainer/AvatarContainer"
import Background from './common/background/Background';
import Header from "./common/header/Header";
import PageLogo from "./common/pageLogo/PageLogo";
import DetailsContainer from "../components/detailsContainer/DetailsContainer"
import SectionTitle from "../components/common/sectionTitle/SectionTitle"
import DetailsInfo from "../components/detailsInfo/DetailsInfo"
import MovieLinks from "../components/movieLinks/MovieLinks"

export function PersonDetail({ person, films, filmsCount }) {
  console.log(person)
  return (
    <React.Fragment>
      <AvatarContainer name={person.name}/>
      <DetailsContainer>
        <SectionTitle>Details</SectionTitle>
        <DetailsInfo details={[
          {
            key:"Homeworld",
            value: person.gender
          },
          {
            key:"Gender",
            value: person.homeworld.name
          },
          {
            key:"Birth Year",
            value: person.birthYear
          },
          {
            key:"Skin Color",
            value: person.skinColor
          },
          {
            key:"Hair Color",
            value: person.hairColor
          },
          {
            key:"Eye Color",
            value: person.eyeColor
          },
        ]} />
  
        <SectionTitle>Films</SectionTitle>
        <MovieLinks films={films} />
        {/* <ul>{map(films, film => <li key={film.id}>{film.title}</li>)}</ul>
        <div>Total: {filmsCount} appearance(s)</div> */}
      </DetailsContainer>
      <p>
        <Link route="people">
          <button>Retornar</button>
        </Link>
      </p>
    </React.Fragment>
  )
}

export default compose(
  withUrlParam("personId"),
  graphql(personQuery, { options: fetchPolicyList }),
  branch(({ data }) => data.loading, renderComponent(Spinner)),
  withProps(({ data: { person } }) => ({
    person: person,
    films: person.filmConnection.films,
    filmsCount: person.filmConnection.totalCount
  }))
)(PersonDetail)
