import RouterApp from "./routes/routes"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

export default function App() {
  const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cldj6veao019d01t7ds4k9bnz/master",
    cache: new InMemoryCache
  })

  return (
    <ApolloProvider client={client}>
      <RouterApp/>
    </ApolloProvider>
  )
}


