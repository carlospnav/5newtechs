import styled from 'styled-components';
import { flexGroup } from "theme/utils"
import { bgProps } from 'theme/utils';

const BgGradient = styled.div`
  ${flexGroup("column", "center", "center")};
  &:after{
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: ${ props => props.small ? '200px' : '812px'};
    background: ${props => props.small ? "none" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)"}; 
  }
`

const Img = styled.img.attrs({
  height: props => props.small ? '200px' : '812px'
})`
  top: 0;
  position: absolute;
  width: 1440px;
  object-fit: contain;
  margin: 0 auto;
  z-index: 0;
  &::after {
    content: "Popo";
  }
`
export default function({ small = false }) {

  return (
    <BgGradient small={small}>
      <Img {...bgProps(small)} small={small}/>
    </BgGradient>
  )
}