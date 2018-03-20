import gql from 'graphql-tag'
import * as React from 'react'
import { graphql } from 'react-apollo'
import { withData } from '../lib/apollo'
import Container from '../containers/Main'
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar'
import { Layout, Menu, Icon, Button } from 'antd'
//import Sticky from '../components/Sticky'
//import { StickyContainer, Sticky } from 'react-sticky-plus'
import Sticky from 'react-sticky-el';

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
@graphql(gql`
  query AllUsersQuery {
    allUsers {
      firstName
    }
  }
`)
export default class extends React.Component {
  render() {
    if (!this.props.data.allUsers) return (
      <div>Loading!</div>
    )
    return (
      <Container>
        <Sticky>
          <h1>Header wow</h1>
        </Sticky>

        {
          this.props.data.allUsers.map((e, i) => (<li key={i}>{e.firstName}</li>))
        }

      </Container>
    )
  }
}

