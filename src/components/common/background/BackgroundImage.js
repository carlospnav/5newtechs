import styled from "styled-components"

export const Img = styled.img`
  top: 0;
  position: absolute;
  width: 1440px;
  object-fit: contain;
  margin: 0 auto;
  z-index: 0;
`

export const LargeImg = styled(Img).attrs({
  src: `/static/bg/bg-index.jpg`,
  srcSet: `/static/bg/bg-index@2x.jpg 2x, /static/bg/bg-index@3x.jpg 3x`
})`
  height: 812px;
`

export const SmallImg = styled(Img).attrs({
  src: `/static/bg/bg-inside.jpg`,
  srcSet: `/static/bg/bg-inside@2x.jpg 2x, /static/bg/bg-inside@3x.jpg 3x`
})`
  height: 200px;
`

export default function({small}){
  return (
    small ? <SmallImg /> : <LargeImg />
  )
}