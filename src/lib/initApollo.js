import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "isomorphic-fetch"
import gql from "graphql-tag"
let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

function create({ state }) {
  const httpLink = new HttpLink({
    ssrMode: !process.browser,
    uri: process.env.GRAPHQL_API_URL
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(state)
  })
}

export default function initApollo(options) {
  if (!process.browser) {
    return create(options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(options)
  }

  return apolloClient
}
