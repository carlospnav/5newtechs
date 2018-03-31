import styled from 'styled-components';
import { avatarProps } from 'theme/utils';


/* Avatar Component - Renders a small or large
  avatar image based on the small prop passed to it.
*/
const Img = styled.img`
  object-fit: contain;
`

export const BigImg = styled(Img).attrs({
  src: "/static/avatar/icn-avatar-big.svg",
  width: "300px",
  height: "283px"
})`
`

export const SmallImg = styled(Img).attrs({
  src: "/static/avatar/icn-avatar-small.svg",
  width: "140px",
  height: "132.6px"
})`
`

export default function({ small = false }) {
  return (
    small ? <SmallImg /> : <BigImg />
  )
}
