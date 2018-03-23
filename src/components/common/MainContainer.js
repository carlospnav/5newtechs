import styled from "styled-components"
import { flexGroup } from "theme/utils"

export default styled.main`
  ${props => props.details ? 
    flexGroup("row", "center") : 
    flexGroup("column", null, "center")};
  flex-wrap: ${props => props.details ? "wrap" : "nowrap"};
  padding: 0 30px;
  width: ${props => props.details ? "1024px" : "1200px" };
  margin: ${props => props.details ? "80px auto" : "0 auto" };
  z-index: 0;
`
