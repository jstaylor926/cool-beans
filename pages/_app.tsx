import * as React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import SpaceX from './spacex/spacex';
import History from './history/history';
import Home from '.';
import Tester from './tester/tester';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});

function MyApp(){
  return (
  <BrowserRouter>
  <ApolloProvider client={client}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spacex" element={<SpaceX />} />
      <Route path="/tester" element={<Tester />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </ApolloProvider>
  </BrowserRouter>
  )
}

export default MyApp;