import styled from "styled-components"
import { flexGroup } from "theme/utils"
import { createFullEpisodeTitle } from "theme/utils";
import SectionTitle from "common/sectionTitle/SectionTitle"
import Detail from "common/detail/Detail"
import Content from "common/contentText/ContentText" 
import Title from "common/detailTitle/DetailTitle"

export const Section = styled.section`
  ${flexGroup()};
  flex-wrap: wrap;
  width: 60%;
  padding-top: 20px;

  @media (min-width: 1000px){
    width: 60%;
  }
`
export const AdjustedTitle = styled(Title)`
  margin: 0;
`
export const AdjustedSectionTitle = styled(SectionTitle)`
  margin: 0;
`

export default function({episodeID, title, content, release, director}){
  return (
    <Section>
      <AdjustedSectionTitle>
        Film
      </AdjustedSectionTitle>
      <AdjustedTitle>{createFullEpisodeTitle(episodeID, title)}</AdjustedTitle>
      <Content>{content}</Content>
      <Detail spaced
        value={release}
        label={"Release Date"}
      />
      <Detail spaced
        value={director}
        label={"Director"}
      />
    </Section>
  )
}