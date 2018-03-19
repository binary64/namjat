import 'isomorphic-fetch';
import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://mpjk0plp9.lp.gql.zone/graphql' }),
  cache: new InMemoryCache(),
});

export default class MyDocument extends Document {
  render() {
    return (
      <ApolloProvider client={client}>
        <html lang="en">
          <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
          </Head>
          <body>
            <Main />
            eeeeeeeeeeeeeeeeee
                    <NextScript />
          </body>
        </html>
      </ApolloProvider>
    )
  }
}
