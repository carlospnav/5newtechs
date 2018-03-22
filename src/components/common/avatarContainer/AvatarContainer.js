import styled from "styled-components"
import css from "theme/variables"

const Name = styled.button`
  color: #a0a9ab;
  font-size: 18px;
  font-family: ${css.font.avatar};
  margin: 30px 0 0 0;
`

export default function({item}) {
  return (
    <Name>{item}</Name>
  )
}
