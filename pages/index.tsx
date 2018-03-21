import gql from 'graphql-tag'
import * as React from 'react'
import { graphql } from 'react-apollo'
import { withData } from '../lib/apollo'
import Container from '../containers/Main'
//import { ProgressBar } from 'primereact/components/progressbar/ProgressBar'
import { Layout, Menu, Icon, Button } from 'antd'
//import Sticky from '../components/Sticky'
//import { StickyContainer, Sticky } from 'react-sticky-plus'
//import Sticky from 'react-sticky-el';
import Widget from '../components/Widget'
import Sticky from '../components/Sticky'

const { Header, Footer, Sider, Content } = Layout

type User = {
  lastName: string
}
type Post = {
  noIdea: string
}
type Props = {
  data: {
    allUsers: Array<User>,
    allPosts: Array<Post>,
    _allPostsMeta: { count: number },
    loading: boolean
  },
  loadMorePosts: () => void
};

@withData
export default class extends React.Component {
  render() {
    return (
      <Container>
        <Sticky>Dynamic widgets (runtime)</Sticky>
        Your name is: <Widget gql={`
          query {
            _allUsersMeta {
              count
            }
          }
        `} widget="widget1" dataKey1='_allUsersMeta' dataKey2='count' />
      </Container>
    )
  }
}
