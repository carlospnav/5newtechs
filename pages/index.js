import { compose } from "recompose"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"
import PeopleListContainer from "components/PeopleListContainer"
import App from "components/App"
import MainContainer from '../src/components/common/MainContainer'
import Background from '../src/components/common/background/Background'
import Header from '../src/components/common/header/Header'
import PageLogo from '../src/components/common/pageLogo/PageLogo'

function IndexPage({ url: { pathname } }) {
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

export default compose(withData, withSetUrlParams)(IndexPage)
