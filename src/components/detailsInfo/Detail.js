import styled from "styled-components"
import css from "theme/variables"

const Detail = styled.div`
  width: 130px;
  margin-bottom: 10px;
`
export default function({children}){ 
  return (
    <Detail>{children}</Detail>
  )
}