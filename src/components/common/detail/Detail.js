import styled from "styled-components"
import css from "theme/variables"

export const Value = styled.h2`
  font-family: ${css.font.roboto};
  font-size: 22px;
  font-weight: ${css.fontWeight.regular};
  text-align: left;
  letter-spacing: 0.8px;
  color: white;
  margin: 0;
`
export const Label = styled.h4`
  font-family: ${css.font.roboto};
  font-size: 14px;
  font-weight: ${css.fontWeight.regular};
  color: ${css.color.sectionTitle};
  margin: 0;
  letter-spacing: 0.5px;
`

export const SpacedDetail = styled.div`
  margin-right: 20px;
`
export const RegularDetail = styled.div`
  width: 130px;
  margin-bottom: 10px;
`

export default function({spaced, value, label}){ 
  const valueContent = (
    <Value>{spaced ? value : value.toUpperCase()}</Value> 
  )
  const labelContent = ( 
    <Label>{label}</Label>
  )

  return (
    spaced ? (
      <SpacedDetail>
        {valueContent}
        {labelContent}
      </SpacedDetail>
    ) : (
      <RegularDetail>
        {valueContent}
        {labelContent}
      </RegularDetail>
    )
  )
}