import { flexGroup } from "theme/utils"
import styled from "styled-components"

const List = styled.div`
  ${flexGroup("column")};
  padding: 0 20px;
  max-width:  ${props => props.main ? "1200px" : "1200px"}
`

export default function({main, children}){
  return(
    <List main={main}>
      {children}
    </List>
  )
}
