import styled from 'styled-components';
import { flexGroup } from "theme/utils"

export default styled.header.attrs({
  height: props => props.main ? '900px' : '300px' 
})`
  ${flexGroup("column", "center", "center")}
  height: ${props => props.main ? '800px' : '300px' }
  width: 100%;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
`
