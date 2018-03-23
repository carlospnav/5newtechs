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
import DetailsContainer from "../components/detailsContaner/DetailsContainer"
import SectionTitle from "../components/common/sectionTitle/SectionTitle"

export function PersonDetail({ person, films, filmsCount }) {
  return (
    <React.Fragment>
      <AvatarContainer name={person.name}/>
      <DetailsContainer>
        <SectionTitle>Details</SectionTitle>
        <ul>
          <li>Gender: {person.gender}</li>
          <li>Birth year: {person.birthYear}</li>
          <li>Eye color: {person.eyeColor}</li>
          <li>Hair color: {person.hairColor}</li>
          <li>Height: {person.height}</li>
          <li>Skin color: {person.skinColor}</li>
          <li>Homeworld: {person.homeworld.name}</li>
        </ul>

        <SectionTitle>Films</SectionTitle>
        <ul>{map(films, film => <li key={film.id}>{film.title}</li>)}</ul>
        <div>Total: {filmsCount} appearance(s)</div>
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
