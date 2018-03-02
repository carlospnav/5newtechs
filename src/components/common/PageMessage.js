import styled from "styled-components"
import { flexGroup } from "theme/utils"
import css from "theme/variables"

const Container = styled.div`
  ${flexGroup("row", "center")};
  width: 100%;
  margin-top: 100px;
`

const StyledMessage = styled.div`
  font-family: ${css.font.openSans};
  font-weight: ${css.fontWeight.semibold};
  font-size: 16px;
  letter-spacing: 0.9px;
`

export default function({ children }) {
  return (
    <Container>
      <StyledMessage>{children}</StyledMessage>
    </Container>
  )
}
