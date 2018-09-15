import * as React from 'react'
import App from './App'
import Login from './Login'
import Head from 'next/head'
import { Button } from 'antd';
//import '../styles/App.less';

export default (props) => true ? (
  <App>
    <Head>
      <link rel='stylesheet' href='http://cdn.bootcss.com/antd/2.9.3/antd.css' />
    </Head>
    <Button>test</Button>
    {props.children}
  </App>
) : (
    <Login />
  )
