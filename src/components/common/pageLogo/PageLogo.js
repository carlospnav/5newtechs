import styled from 'styled-components';
import { logoProps } from 'theme/utils';

const Img = styled.img`
  object-fit: contain;
  z-index: 1;
`

export const SmallImg = styled(Img).attrs({
  width: "259px",
  height: "150px",
  src: "/static/logo/logo-small.svg"
})`
  top: auto;
  position: relative;
`

export const BigImg = styled(Img).attrs({
  width: "379px",
  height: "214px",
  src: "/static/logo/logo-big.svg"
})`
  position: absolute;
  top: 290px;
  boxShadow: 0 2px 6px 0 #000000;
`

export default function({ small = false }) {
  return (
    small ? <SmallImg /> : <BigImg />
  )
}