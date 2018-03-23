import styled from "styled-components"
import { flexGroup } from "theme/utils"

export default styled.main`
  ${props => props.details ? 
    flexGroup("row") : 
    flexGroup("column", null, "center")};
  padding: 0 30px;
  width: ${props => props.details ? "1440px" : "1200px" };
  margin: ${props => props.details ? "80px auto" : "0 auto" };
  z-index: 0;
`
