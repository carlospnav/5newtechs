import styled from "styled-components"
import { flexGroup } from "theme/utils"

export default styled.section`
  ${flexGroup("column", null, "center")}
  color: white;
  padding: 40px 60px;
  width: 100%;

  @media (min-width: 1024px){
    align-items: flex-start;
    width: 50%;
    padding: 25px 10px;
  } 
`