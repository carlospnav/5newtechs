import styled from "styled-components"
import Detail from "common/detail/Detail"
import { flexGroup } from "theme/utils"
import css from "theme/variables"
import SectionTitle from "common/sectionTitle/SectionTitle"


const DetailsInfo = styled.article`
  ${flexGroup("row", "space-between")};
  flex-wrap: wrap;
  width: 100%;
  max-width: 480px;

  @media (min-width: 1400px){
    max-width: 420px;
  }
`


export default function({details}){
  return(
    <DetailsInfo>
      <SectionTitle>Details</SectionTitle>
      {details.map((item) => (
        <Detail
          key={`${item.key}${item.value}`} 
          value={item.value.toUpperCase()} 
          label={item.key} 
        />
      ))}      
    </DetailsInfo>
  )
}