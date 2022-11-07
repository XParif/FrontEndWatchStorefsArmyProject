import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import { useEffect } from 'react';

const LookupJwt = () =>{
  if(typeof window !== "undefined"){
    return localStorage.getItem('jwt_token');
  }
}
const httpLink = new HttpLink({ uri: 'https://fs-army-teamf-clockstore.herokuapp.com/graphql' });

const Middleware = new ApolloLink((operation, forward) => {
  const jwt = LookupJwt()
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: jwt ? `Bearer ${jwt}` : "",
      "normalize" : true
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(Middleware, httpLink),
});

export default client;