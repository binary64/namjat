import gql from 'graphql-tag';
import * as React from 'react';
import { graphql } from 'react-apollo';
import withData from '../lib/apollo'
import Container from '../containers/Main'
import Sticky from '../components/Sticky'

// interface User {
//   lastName: string
// };
// interface Post {
//   noIdea: string
// };
// interface Props {
//   data: {
//     allUsers: Array<User>,
//     allPosts: Array<Post>,
//     _allPostsMeta: { count: number },
//     loading: boolean
//   },
//   loadMorePosts: () => void
// };

@withData
@graphql(gql`
  query AllUsersQuery {
    allUsers(first: 15) {
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
        <Sticky><h1>All users (compile-time)</h1></Sticky>
        {
          this.props.data.allUsers.map((e, i) => <li key={i}>{e.firstName}</li>)
        }
      </Container>
    )
  }
}

