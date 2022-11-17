import {  Reference, makeVar, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

export const cartItemsVar = makeVar([]);
export const extraCost = makeVar({});
export const message = makeVar(null);

export const isLogin = makeVar(false)
export const Loading2 = makeVar(false)
export const modalController = makeVar(false)
export const pocketKhali = makeVar(false)


export const LookupJwt = () =>{
  if(typeof window !== "undefined"){
    return (localStorage.getItem('jwt_token'));
  }
}







const httpLink = new HttpLink({ uri: process.env.BACKEND_API_END_POINT});


const Middleware = new ApolloLink((operation, forward) => {
  const jwt = LookupJwt()
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: jwt ? `${jwt}` : "",
      "normalize" : true
    }
  }));

  return forward(operation);
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(Middleware, httpLink),
});