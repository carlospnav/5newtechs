import styled from "styled-components"
import css from "theme/variables"

const Value = styled.h2`
  font-family: ${css.font.roboto};
  font-size: 22px;
  font-weight: ${css.fontWeight.regular};
  text-align: left;
  letter-spacing: 0.8px;
  color: white;
  margin: 0;
`
const Label = styled.h4`
  font-family: ${css.font.roboto};
  font-size: 14px;
  font-weight: ${css.fontWeight.regular};
  color: ${css.color.sectionTitle};
  margin: 0;
  letter-spacing: 0.5px;
`

const Detail = styled.div`
  ${props => !props.spaced && `width: 130px;`}
  ${props => props.spaced ? `margin-right: 20px;` : `margin-bottom: 10px;`}
`

export default function({spaced, value, label}){ 
  return (
    <Detail spaced={spaced}>
      <Value>{value.toUpperCase()}</Value>
      <Label>{label}</Label>
    </Detail>
  )
}