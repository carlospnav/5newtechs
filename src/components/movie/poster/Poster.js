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

export default function({episode}){
  return (
    <Poster>
      <img src={`/static/poster/episode${episode}.jpg`} alt="Movie Poster" />
    </Poster>
  )
}