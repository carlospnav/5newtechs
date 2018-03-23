import { compose } from "recompose"
import withData from "lib/withData"
import withSetUrlParams from "lib/withSetUrlParams"
import App from "components/App"
import MainContainer from "../src/components/common/MainContainer"
import Background from "../src/components/common/background/Background"
import Header from "../src/components/common/header/Header"
import PageLogo from "../src/components/common/pageLogo/PageLogo"
import PersonDetail from "components/PersonDetail"

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
