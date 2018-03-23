import styled from 'styled-components';
import { flexGroup } from "theme/utils"

export default styled.header`
  ${flexGroup("column", "center", "center")}
  height: ${props => props.main ? '660px' : '200px' }
  width: 100%;
  z-index: 1;
`
