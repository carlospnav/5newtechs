import styled from "styled-components"
import css from 'theme/variables'

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
`

export default function({films}){
  console.log(films)
  return (
    <Links>
      {films.map((film) => (
        <Li key={film.id}>
          {film.title}
        </Li>
      ))}
    </Links>
  )
}