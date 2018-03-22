import styled from 'styled-components';
import { bgProps } from 'theme/utils';

const Img = styled.img.attrs({
  height: props => props.small ? '200px' : '812px'
})`
  position: absolute;
  width: 1440px;
  object-fit: contain;
  margin: 0 auto;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    display: inline-block;
    background-color: red;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 75%, rgba(0,0,0,0.9) 100%);
    z-index: 2;
  }
`
export default function({ small = false }) {

  return (
    <Img {...bgProps(small)} small={small}/>
  )
}