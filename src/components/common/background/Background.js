import styled from 'styled-components'
import { flexGroup } from "theme/utils"
import { bgProps } from 'theme/utils'
import Img from "./BackgroundImage"

const BackgroundContainer = styled.div`
  ${flexGroup("column", "center", "center")};
  &:after{
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 100%;
  }
`
const SmallBackGroundContainer = styled(BackgroundContainer)`
  &:after{ 
    height: 200px; 
  }
`

const LargeBackGroundContainer = styled(BackgroundContainer)`
  &:after{ 
    height: 812px;
    linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%);
  }
`

export default function({ small = false }) {
  const img = <Img small={small} />

  return (
    small ? <SmallBackGroundContainer>{img}</SmallBackGroundContainer> :
      <LargeBackGroundContainer>{img}</LargeBackGroundContainer>
  )
}

// import styled from 'styled-components';
// import { flexGroup } from "theme/utils"
// import { bgProps } from 'theme/utils';

// const BackgroundContainer = styled.div`
//   ${flexGroup("column", "center", "center")};
//   &:after{
//     content: "";
//     position: absolute;
//     left: 0; top: 0;
//     width: 100%;
//     height: ${ props => props.small ? '200px' : '812px'};
//     background: ${props => props.small ? "none" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)"}; 
//   }
// `
// const SmallBackGroundContainer = styled(BackgroundContainer)`
//   height: 200px;
// `

// const LargeBackGroundContainer = styled(BackgroundContainer)`
//   height: 812px;
//   linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%);
// `

// export const Img = styled.img.attrs({
//   height: props => props.small ? '200px' : '812px'
// })`
//   top: 0;
//   position: absolute;
//   width: 1440px;
//   object-fit: contain;
//   margin: 0 auto;
//   z-index: 0;
// `
// export default function({ small = false }) {

//   return (
//     <BgGradient small={small}>
//       <Img {...bgProps(small)} small={small}/>
//     </BgGradient>
//   )
// }