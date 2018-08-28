import '../publicPath';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'Adaptors';
import App from './app';

render(
  <BrowserRouter>
    <ApolloProvider client={ApolloClient()}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('reactRoot')
);
