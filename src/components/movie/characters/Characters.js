import styled from "styled-components"
import css from "theme/variables"
import { flexGroup } from "theme/utils"
import CharacterList from "common/characterList/CharacterList"

const Characters =  styled.section`
  ${flexGroup()};
  flex-wrap: wrap;
  width: 60%;

  @media (min-width: 1000px){
    width: 100%;
  }
`

const Title = styled.h2`
  width: 100%;
  font-family: ${css.font.roboto};
  font-size: 22px;
  font-weight: ${css.fontWeight.semibold};
  letter-spacing: 0.8px;
  color: ${css.color.blueTitle};
  margin: 40px 10px;
`

export default function({items}){
  return (
    <Characters>
      <Title>Characters</Title>
      <CharacterList items={items}/>
    </Characters>
  )
}