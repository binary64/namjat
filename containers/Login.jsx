import * as React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import Link from 'next/link'

const { Header, Footer, Sider, Content } = Layout;

export default class Login extends React.Component {
  render() {
    return <Layout style={{ height: '100vh' }}>
      <Header key='header'>
        header
        </Header>
      <Layout key='body' style={{ flex: '1' }}>
        <Content>
          <style jsx>{`
              .ant-layout-content {
                padding: 5vmin;
              }
            `}
          </style>
          <h1>Login</h1>
        </Content>
      </Layout>
      <Footer key='footer'>
        Only authorized users
      </Footer>
    </Layout>
  }
}
