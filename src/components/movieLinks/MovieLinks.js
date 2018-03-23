import styled from "styled-components"
import css from 'theme/variables'
import { romanizeEpisodeNum } from "theme/utils"

const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  font-family: ${css.font.roboto};
  font-size: 18px;
  color: ${css.color.link};
  font-weight: 500;
  letter-spacing: 0.7px;
  margin-bottom: 20px;
`

export default function({films}){
  console.log(films)
  return (
    <Links>
      {films.map((film) => (
        <Li key={film.id}>
          {`Star Wars: ${`Episode ${film.episodeID && romanizeEpisodeNum(film.episodeID)}`}: ${film.title} (${film.releaseDate.slice(0, 4) })`}
        </Li>
      ))}
    </Links>
  )
}