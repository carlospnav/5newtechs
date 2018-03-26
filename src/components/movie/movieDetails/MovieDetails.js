import styled from "styled-components"
import { flexGroup } from "theme/utils"

export default styled.section`
  ${flexGroup(null, "center")};
  flex-wrap: wrap;

  @media (min-width: 1000px){
    justify-content: space-between;
  }
`