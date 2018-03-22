import { flexGroup } from "theme/utils"
import styled from "styled-components"

const List = styled.div`
  position: relative;
  ${flexGroup("column", "center", "center")};
  padding: 0 20px;
  width:  ${props => props.main ? "1200px" : "1200px"}
`

export default function({main, children}){
  return(
    <List main={main}>
      {children}
    </List>
  )
}
