import gql from 'graphql-tag';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { withData } from '../lib/apollo'
import Container from '../containers/Main'
import Sticky from '../components/Sticky'

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
        <Sticky>All users (compile-time)</Sticky>
        {
          this.props.data.allUsers.map((e, i) => <li key={i}>{e.firstName}</li>)
        }
      </Container>
    )
  }
}

