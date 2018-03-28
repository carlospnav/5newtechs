import styled from 'styled-components'
import { flexGroup } from "theme/utils"
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
export const SmallBackGroundContainer = styled(BackgroundContainer)`
  &:after{ 
    height: 200px; 
  }
`

export const LargeBackGroundContainer = styled(BackgroundContainer)`
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
