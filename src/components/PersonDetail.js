import { graphql } from "react-apollo"
import { branch, compose, withProps, renderComponent } from "recompose"
import map from "lodash/map"
import personQuery from "queries/person"
import withUrlParam from "lib/withUrlParam"
import { fetchPolicyList } from "lib/constants"
import Link from "common/Link"
import Spinner from "common/Spinner"

export function PersonDetail({ person, films, filmsCount }) {
  return (
    <div>
      <h2>Details for {person.name}</h2>
      <ul>
        <li>Gender: {person.gender}</li>
        <li>Birth year: {person.birthYear}</li>
        <li>Eye color: {person.eyeColor}</li>
        <li>Hair color: {person.hairColor}</li>
        <li>Height: {person.height}</li>
        <li>Skin color: {person.skinColor}</li>
        <li>Homeworld: {person.homeworld.name}</li>
      </ul>

      <h2>Films:</h2>
      <ul>{map(films, film => <li key={film.id}>{film.title}</li>)}</ul>
      <div>Total: {filmsCount} appearance(s)</div>

      <p>
        <Link route="people">
          <button>Retornar</button>
        </Link>
      </p>
    </div>
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
