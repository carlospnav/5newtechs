import styled from 'styled-components';
import { logoProps } from 'theme/utils';

const Img = styled.img.attrs({
  height: props => props.small ? '150px' : '214px',
  width: props => props.small ? '259px' : '379px',
  boxShadow: props => props.small ? null : '0 2px 6px 0 #000000' 
})`
  object-fit: contain;
  z-index: 1;
`

export default function({ small = false }) {
  return (
    <Img {...logoProps(small)} small={small}/>
  )
}