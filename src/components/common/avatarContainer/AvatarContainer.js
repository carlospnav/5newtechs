import styled from "styled-components"
import css from "theme/variables"
import { flexGroup } from "theme/utils"
import Avatar from "../avatar/Avatar"


const Name = styled.h2`
  color: #a0a9ab;
  font-size: 26px;
  font-weight: ${css.fontWeight.regular};
  color: white;
  font-family: ${css.font.roboto};
  margin: 60px 0 30px 0;

  @media (min-width: 1024px){
    margin: 30px 0;
  }

`
const Container = styled.section`
  ${flexGroup("column", "center", "center")}
  width: 100%;
  padding: 20px;

  @media (min-width: 1024px){
    width: 45%;
    padding: 40px 10px;
  } 
`

export default function({name}) {
  return (
    <Container>
      <Avatar />
      <Name>{name}</Name>
    </Container>
  )
}
