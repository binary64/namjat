// @flow
import * as React from 'react';
import App from '../components/App';

type Props = {
  title?: string,
  url: UrlType,
  children: React.Element<*>
};

const Default = (props: Props) => (
  <App>
    {props.children}
  </App>
);

export default Default;
