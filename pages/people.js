import { compose } from "recompose"
import withData from "lib/withData"
import App from "components/App"
import PeopleListContainer from "components/people/PeopleListContainer"
import withSetUrlParams from "lib/withSetUrlParams"
import MainContainer from "common/mainContainer/MainContainer";
import Background from "common/background/Background";
import PageLogo from "common/pageLogo/PageLogo";
import Header from 'common/header/Header';

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
