import styled from "styled-components"
import "theme/global"

const Main = styled.div`
  display: flex;
`

export default ({ children }) => <Main>{children}</Main>
