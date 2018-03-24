import styled from "styled-components"
import css from 'theme/variables'
import { romanizeEpisodeNum } from "theme/utils"
import SectionTitle from "../common/sectionTitle/SectionTitle"

const Links = styled.ul`
  list-style-type: none;
  padding: 40px 0;
  margin: 0;

  @media (min-width: 1024px){
    padding: 20px 0;
  }
`

const Li = styled.li`
  font-family: ${css.font.roboto};
  font-weight: ${css.fontWeight.regular};
  font-size: 18px;
  color: ${css.color.link};
  letter-spacing: 0.7px;
  margin-bottom: 20px;
`

export default function({films}){
  return (
    <Links>
      <SectionTitle>Films</SectionTitle>
      {films.map((film) => (
        <Li key={film.id}>
          {`Star Wars: ${`Episode ${film.episodeID && romanizeEpisodeNum(film.episodeID)}`}: ${film.title} (${film.releaseDate.slice(0, 4) })`}
        </Li>
      ))}
    </Links>
  )
}