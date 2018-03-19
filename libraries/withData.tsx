// @flow
import * as React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import 'isomorphic-fetch';
import cookies from 'next-cookies';
import apolloClient from './apolloClient';
import persist from './persist';

type Props = {
  headers: HeadersType,
  accessToken: ?string,
  initialState: Object,
  url: UrlType
};

type Context = {
  pathname: string,
  query: Object,
  asPath: string,
  req?: {
    headers?: Object
  },
  res?: Object,
  jsonPageRes?: Object,
  err?: Object
};

export default (
  Component: React.ComponentType<*>
): React.ComponentType<Props> =>
  class extends React.Component<Props> {
    static propTypes = {
      headers: PropTypes.object.isRequired,
      accessToken: PropTypes.string,
      initialState: PropTypes.object.isRequired
    };

    static defaultProps = {
      accessToken: null
    };

    static async getInitialProps(ctx: Context) {
      const headers = ctx.req ? ctx.req.headers : {};
      const token: string = cookies(ctx)[persist.ACCESS_TOKEN_KEY];
      const client = apolloClient(headers, token);
      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...(await (typeof Component.getInitialProps === 'function'
          ? Component.getInitialProps(ctx)
          : {}))
      };

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client}>
            <Component {...props} />
          </ApolloProvider>
        );
        await getDataFromTree(app);
      }

      return {
        initialState: {
          apollo: {
            data: state.apollo.data
          }
        },
        headers,
        ...props
      };
    }

    constructor(props: Props) {
      super(props);
      this.apolloClient = apolloClient(this.props.headers);
    }

    apolloClient: Object;

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <Component {...this.props} />
        </ApolloProvider>
      );
    }
  };
