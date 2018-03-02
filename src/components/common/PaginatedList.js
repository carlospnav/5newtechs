import styled from "styled-components"
import StyledLink from "common/StyledLink"
import { compose, branch, renderComponent } from "recompose"
import { flexGroup } from "theme/utils"
import PageMessage from "common/PageMessage"

const Section = styled.section`
  ${flexGroup("column")};
  flex-grow: 1;
  width: 100%;
`

const BottomBar = styled.div`
  ${flexGroup("row", "center", "center")};
  width: 100%;
  height: 60px;
  background-color: rgba(191, 191, 191, 0.1);
`

export function PaginatedList({
  items,
  hasNextPage,
  loadMore,
  ItemComponent,
  Wrapper,
  ...props
}) {
  return (
    <Section>
      <Wrapper {...props}>
        {items.map(item => <ItemComponent key={item.id} item={item} />)}
      </Wrapper>
      {hasNextPage && (
        <BottomBar>
          <StyledLink onClick={loadMore}>Load More</StyledLink>
        </BottomBar>
      )}
    </Section>
  )
}

function NotFoundMessage({ notFoundMessage }) {
  return <PageMessage>{notFoundMessage}</PageMessage>
}

export default compose(
  branch(props => props.items.length === 0, renderComponent(NotFoundMessage))
)(PaginatedList)
