import styled from "styled-components"
import css from "theme/variables"
import { flexGroup } from "theme/utils"
import Avatar from "../avatar/Avatar"


const Name = styled.h2`
  color: #a0a9ab;
  font-size: 26px;
  font-weight: 300;
  color: white;
  font-family: ${css.font.roboto};
  margin: 30px 0 0 0;
`
const Container = styled.section`
  ${flexGroup("column", "center", "center")}
  padding: 40px;
  margin-right: 20px;
`

export default function({name}) {
  return (
    <Container>
      <Avatar />
      <Name>{name}</Name>
    </Container>
  )
}
