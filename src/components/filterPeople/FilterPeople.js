import styled from "styled-components"
import css from "theme/variables"
import { flexGroup } from "theme/utils"


const Input = styled.input.attrs({
  type: "text",
  placeholder: "Find your character"
})`
  height: 50px;
  width: 460px;
  border-radius: 4px;
  border: 1px solid #818181;
  background-color: black;
  color: white;
  padding-left: 20px;
  margin-bottom: 40px;
`
const SearchIcn = styled.img.attrs({
  src: "/static/search/icn-search.svg",
  alt: "Search Icon"
})`
  position: absolute;
  right: 20px;
  top: 16px;
`

const ErrorMessage = styled.p`
  color: white;
  text-align: center;
  max-width: 300px;
  margin: 0 0 200px 0;
  font-family: ${css.font.error};
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