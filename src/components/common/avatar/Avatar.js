import styled from 'styled-components';
import { avatarProps } from 'theme/utils';


/* Avatar Component - Renders a small or large
  avatar image based on the small prop passed to it.
*/
const Img = styled.img.attrs({
  width: props => props.small ? '140px' : '300px',
  height: props => props.small ? '132.6px' : '283px'
})`
  object-fit: contain;
`
export default function({ small = false }) {

  return (
    <Img {...avatarProps(small)} small={small}/>
  )
}