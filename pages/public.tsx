import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withData } from '../lib/apollo'
import Container from '../containers/Main'
import Sticky from '../components/Sticky'

@withData
@graphql(gql`
  query AllUsersQuery {
    allUsers {
      lastName
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
        <Sticky><h1>GQL at compile-time</h1></Sticky>
        There are {this.props.data.allUsers.length} users in the database.
      </Container>
    )
  }
}

