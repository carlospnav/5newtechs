import styled from "styled-components"
import { flexGroup } from "theme/utils"

const Poster = styled.div`
  width: 60%;
  ${flexGroup(null, "center")};

  @media (min-width: 1000px){
    width: 40%;
    justify-content: flex-start;
  }
`
const PosterImg = styled.img`

`

export default function({episode}){
  return (
    <Poster>
      <PosterImg src={`/static/poster/episode${episode}.jpg`} alt="Movie Poster" />
    </Poster>
  )
}