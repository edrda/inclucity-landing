const React = require("react")
const { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } = require("@apollo/client")

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GATSBY_GQL_ENDPOINT,
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_GQL_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
  ssrMode: true, // <- importante para build
})

exports.wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
