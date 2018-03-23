import styled from "styled-components"
import Link from "common/Link"
import css from "theme/variables"

const ButtonContainer = styled.div`
  width: 100%;

`

const Button = styled.button`
  border: 1px solid ${css.color.borderColor};
  background: none;
  font-family: ${css.font.roboto};
  font-size: 20px;
  font-weight: ${css.fontWeight.regular}
  color: white;
  padding: 10px;
  margin: 0 40px;
  align-self: right;
`

export default function({to}){
  return (
    <ButtonContainer>
        <Link route={to}>
          <Button>Return</Button>
        </Link>
    </ButtonContainer>
  )
}