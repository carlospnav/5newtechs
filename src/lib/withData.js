import { Component } from "react"
import { Provider } from "react-redux"
import { getDisplayName } from "recompose"
import { ApolloProvider, getDataFromTree } from "react-apollo"
import initApollo from "./initApollo"
import initRedux from "./initRedux"

function App({ ComposedComponent, redux, apollo, ...props }) {
  return (
    <ApolloProvider client={apollo}>
      <Provider store={redux}>
        <ComposedComponent {...props} />
      </Provider>
    </ApolloProvider>
  )
}

export default ComposedComponent => {
  return class WithData extends Component {
    static displayName = `WithData(${getDisplayName(ComposedComponent)})`

    static getInitialProps(ctx) {
      if (process.browser) {
        return {}
      }

      return new Promise(async resolve => {
        const composedInitialProps = ComposedComponent.getInitialProps
          ? await ComposedComponent.getInitialProps(ctx)
          : {}

        const redux = initRedux()
        const url = { query: ctx.query, pathname: ctx.pathname }
        const apollo = initApollo({})

        try {
          await getDataFromTree(
            <App
              ComposedComponent={ComposedComponent}
              redux={redux}
              apollo={apollo}
              url={url}
              {...composedInitialProps}
            />
          )
        } catch (err) {}

        resolve({ apolloState: apollo.extract() })
      })
    }

    constructor(props) {
      super(props)

      this.redux = initRedux()
      this.apollo = initApollo({ state: props.apolloState })
    }

    render() {
      return (
        <App
          ComposedComponent={ComposedComponent}
          redux={this.redux}
          apollo={this.apollo}
          {...this.props}
        />
      )
    }
  }
}
