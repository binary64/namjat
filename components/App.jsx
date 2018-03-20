import * as React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Icon, Button } from 'antd';
import Login from './Login'

const { Header, Footer, Sider, Content } = Layout;

export default class Layout2 extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        {true ? (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Header>
              header
            </Header>
            <Layout style={{ flex: '1' }}>
              <Sider>
                <Menu>
                  <Menu.Item>
                    <Link href='/'><a>Home</a></Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/about'><a>About</a></Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content>
                {this.props.children}
              </Content>
            </Layout>
            <Footer>
              footer
            </Footer>
          </div>
        ) : (
            <div style={{ height: '100%' }}>
              <Header><h1>namjat</h1></Header>
              <Layout style={{ flex: '1' }}>
                <Content>
                  <Login />
                </Content>
              </Layout>
            </div>
          )}
      </Layout>
    )
  }
}
