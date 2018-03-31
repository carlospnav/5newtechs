import { compose } from "recompose"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"
import App from "components/App"
import MainContainer from "common/mainContainer/MainContainer"
import Background from "common/background/Background"
import Header from "common/header/Header"
import PageLogo from "common/pageLogo/PageLogo"
import PersonDetail from "components/details/PersonDetail"

function PersonDetailPage({ url: { pathname } }) {
  return (
    <App>
      <Background small/>
      <Header>
        <PageLogo small/>
      </Header>
      <MainContainer details>
        <PersonDetail />
      </MainContainer>
    </App>
  )
}

export default compose(withData, withSetUrlParams)(PersonDetailPage)
