import styled from 'styled-components';
import { avatarProps } from 'theme/utils';

/* Avatar Component - Renders a small or large
  avatar image based on the small prop passed to it.
*/
let componentProps;

export default styled.img.attrs({
  initProps: props => {
    componentProps = avatarProps(props.small)
  },
  src: props => componentProps.src,
  width: props => props.small ? '140px' : '300px',
  height: props => props.small ? '132.6px' : '283px'
})`
  object-fit: contain;
`