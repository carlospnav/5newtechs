import styled from "styled-components"
import css from "theme/variables"

const Title =  styled.h4`
  font-family: ${css.font.roboto};
  color: ${css.color.sectionTitle};
  width: 100%;
  margin: 0 0 20px 0;
`

export default function({children}){
  return (
    <Title>{children}</Title>
  )
}