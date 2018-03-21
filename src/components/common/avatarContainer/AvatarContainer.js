import styled from "styled-components"
import { flexGroup } from "theme/utils"
import Avatar from "../avatar/Avatar"

const Container = styled.div`
  ${flexGroup("column", null, "center")};
  padding: 40px;
`
const Name = styled.h3`
  color: #a0a9ab;
  font-size: 18px;
  margin: 20px 0 0 0;
`

export default function({item}) {
  return (
    <Container>
      <Avatar small/>
      <Name>{item.name}</Name>
    </Container>
  )
}
