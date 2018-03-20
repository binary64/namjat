import * as React from 'react';
import App from './App'
import Login from './Login'

export default (props) => true ? (
  <App>
    {props.children}
  </App>
) : (
    <Login />
  )
