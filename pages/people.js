import { compose } from "recompose"
import withData from "lib/withData"
import App from "components/App"
import PeopleListContainer from "components/people/PeopleListContainer"
import withSetUrlParams from "lib/withSetUrlParams"
import MainContainer from "../src/components/common/MainContainer";
import Background from "../src/components/common/background/Background";
import PageLogo from "../src/components/common/pageLogo/PageLogo";
import Header from '../src/components/common/header/Header';

function PeoplePage({ url: { pathname } }) {
  return (
    <App>
      <Background />
      <Header main>
        <PageLogo />
      </Header>
      <MainContainer>
        <PeopleListContainer />
      </MainContainer>
    </App>
  )
}

export default compose(withData, withSetUrlParams)(PeoplePage)
