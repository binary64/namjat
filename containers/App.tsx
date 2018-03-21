import * as React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Icon, Button } from 'antd';
import Login from './Login'

const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
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
                <style global jsx>{`
                  .ant-layout-content {
                    padding: 5vmin;
                  }
                  .ant-layout-sider {
                    flex: 0 0 18vw !important;
                    max-width: 400px !important;
                    min-width: 80px !important;
                    min-width: auto !important;
                    width: 200px !important;
                  }
                `}</style>
                <Menu>
                  <Menu.Item>
                    <Link href='/'><a>Home</a></Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/public'><a>Public</a></Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/private'><a>Private</a></Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content>
                <style jsx>{`
                  .ant-layout-content {
                    padding: 5vmin;
                  }
                  .ant-layout-sider {
                    flex: 0 0 18vw;
                    max-width: 400px;
                    min-width: 50px;
                    width: 200px;
                  }
                `}</style>
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
