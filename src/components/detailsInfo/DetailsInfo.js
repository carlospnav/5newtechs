import styled from "styled-components"
import Detail from "./Detail"
import { flexGroup } from "theme/utils"
import css from "theme/variables"

const DetailsInfo = styled.article`
  ${flexGroup(null, "space-between")};
  flex-wrap: wrap;
  width: 400px;
`
const Label = styled.h4`
  font-family: ${css.font.roboto};
  font-size: 14px;
  font-weight: 300;
  color: ${css.color.sectionTitle};
  margin: 0;
`
const Value = styled.h2`
  font-family: ${css.font.roboto};
  font-size: 22px;
  font-weight: 300;
  text-align: left;
  color: white;
  margin: 0;
`

export default function({details}){
  return(
    <DetailsInfo>
      {details.map((item) => (
        <Detail>
          <Value>{item.value.toUpperCase()}</Value>
          <Label>{item.key}</Label>
        </Detail>
      ))}      
    </DetailsInfo>
  )
}