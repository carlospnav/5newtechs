import styled from "styled-components"
import { flexGroup } from "theme/utils"

export default styled.main`
  ${props => props.details ? 
    flexGroup("row", "center", "flex-start") : 
    flexGroup("column", null, "center")};
  width: 100%;
  flex-wrap: ${props => props.details ? "wrap" : "nowrap"};
  max-width: 1120px;
  margin: ${props => props.details ? "80px auto" : "0 auto" };
  z-index: 0;

  ${props => props.details && `
    @media (min-width: 600){
      padding: 0 30px;
    }
  `}
`
