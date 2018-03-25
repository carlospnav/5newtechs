import styled from "styled-components"
import Detail from "./Detail"
import { flexGroup } from "theme/utils"
import css from "theme/variables"
import SectionTitle from "../common/sectionTitle/SectionTitle"

const DetailsInfo = styled.article`
  ${flexGroup("row", "space-between")};
  flex-wrap: wrap;
  width: 100%;
  max-width: 480px;

  @media (min-width: 1400px){
    max-width: 420px;
  }
`
const Label = styled.h4`
  font-family: ${css.font.roboto};
  font-size: 14px;
  font-weight: ${css.fontWeight.regular};
  color: ${css.color.sectionTitle};
  margin: 0;
  letter-spacing: 0.5px;
`
const Value = styled.h2`
  font-family: ${css.font.roboto};
  font-size: 22px;
  font-weight: ${css.fontWeight.regular};
  text-align: left;
  letter-spacing: 0.8px;
  color: white;
  margin: 0;
`

export default function({details}){
  return(
    <DetailsInfo>
      <SectionTitle>Details</SectionTitle>
      {details.map((item) => (
        <Detail>
          <Value>{item.value.toUpperCase()}</Value>
          <Label>{item.key}</Label>
        </Detail>
      ))}      
    </DetailsInfo>
  )
}