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
`
export default function({ small = false }) {

  return (
    <Img {...bgProps(small)} small={small}/>
  )
}