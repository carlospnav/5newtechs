import styled from 'styled-components';
import { avatarProps } from 'theme/utils';

const Img = styled.img.attrs({
  width: props => props.small ? '140px' : '132.6px',
  height: props => props.small ? '132.6px' : ''
})`
  object-fit: contain;
`
export default function({ small = false }) {

  return (
    <Img {...avatarProps(small)} small={small}/>
  )
}