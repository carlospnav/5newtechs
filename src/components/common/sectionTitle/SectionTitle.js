import styled from "styled-components"
import css from "theme/variables"

const Title =  styled.h4`
  font-family: ${css.font.roboto};
  color: ${css.color.sectionTitle};
`

export default function({children}){
  return (
    <Title>{children}</Title>
  )
}