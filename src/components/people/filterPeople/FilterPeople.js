import styled from "styled-components"
import css from "theme/variables"
import { flexGroup } from "theme/utils"
import ErrorMessage from "common/errorMessage/ErrorMessage"
import SearchIcn from "common/searchIcon/SearchIcon"


export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Find your character"
})`
  font-family: ${css.font.roboto};
  font-size: 18px;
  font-weight: ${css.fontWeight.regular};
  letter-spacing: 0.7px;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #818181;
  background-color: black;
  padding-left: 20px;
  margin: 0 20px 40px 20px;
  color: white;
 
  &::placeholder{
    color: white;
  }

  @media (min-width: 500px){
    width: 460px;
  }
`

const Container = styled.div`
  ${flexGroup("column", "center", "center")}
  position: relative;
`

export default function({error, onChange}){
  return(
    <Container>
      <Input onChange={onChange}/>
      <SearchIcn />
      {error && <ErrorMessage>{error}</ErrorMessage> }
    </Container>
  )
}