import styled from "styled-components"
import css from 'theme/variables'
import Link from "common/Link"
import SectionTitle from "common/sectionTitle/SectionTitle"
import { createFullEpisodeTitle } from "theme/utils";

const Links = styled.ul`
  list-style-type: none;
  padding: 40px 0;
  margin: 0;

  @media (min-width: 1024px){
    padding: 20px 0;
  }
`

export const Film = styled.li`
  font-family: ${css.font.roboto};
  font-weight: ${css.fontWeight.regular};
  font-size: 18px;
  letter-spacing: 0.7px;
  margin-bottom: 20px;
`

export const SLink = styled(Link)`
  margin: 40px;
`

export const ColoredLink = styled.a`
  color: ${css.color.link};
`

export default function({films}){
  return (
    <Links>
      <SectionTitle>Films</SectionTitle>
      {films && films.map((film) => (
        <Film key={film.id}>
          <SLink route="movies" filmId={film.id}>
            <ColoredLink>{`${createFullEpisodeTitle(film.episodeID, film.title)} (${film.releaseDate.slice(0, 4) })`}</ColoredLink>
          </SLink>
        </Film>
      ))}
    </Links>
  )
}