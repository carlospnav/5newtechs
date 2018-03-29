import styled from "styled-components"
import Avatar from "common/avatar/Avatar"
import Link from "common/Link"
import { flexGroup } from "theme/utils"
import css from "theme/variables"
import map from "lodash/map"

const Item = styled.li`
  ${flexGroup("column", "center", "center")};
  border: 1px solid ${css.color.borderColor};
  border-radius: 6px;
  height: 260px;
  width: 220px;
  margin: 0 10px 20px 10px;
`

const List = styled.ul`
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
`
export const CenterList = styled(List)`
  ${flexGroup(null, "center")};
`

export const LeftList = styled(List)`
  ${flexGroup()};
`

const Name = styled.h2`
  color: #a0a9ab;
  font-size: 18px;
  font-weight: ${css.fontWeight.regular};
  font-family: ${css.font.roboto};
  margin: 30px 0 0 0;
  &:hover{ 
    font-weight: ${css.fontWeight.bold};
    cursor: pointer;
   }
`

export default function({items, center}){
  const content = map(items, item => (
    <Item key={item.id}>
      <Avatar small/>
      <Link route="person_detail" personId={item.id}>
        <Name>{item.name}</Name>
      </Link>
    </Item>
  ))

  return(
    center ? (
      <CenterList>
        {content}
      </CenterList>
    ) : (
      <LeftList>
        {content}
      </LeftList>
    )
  )
}