import "./src/styles/global.css"

import React from "react"
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink 
} from "@apollo/client"
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: process.env.GATSBY_GQL_ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.GATSBY_GQL_TOKEN}`,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    {element}
  </ApolloProvider>
)