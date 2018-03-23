import styled from "styled-components"
import "theme/global"

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default ({ children }) => <Main>{children}</Main>
