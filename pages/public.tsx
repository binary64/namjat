import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withData } from '../lib/apollo'
import Container from '../containers/Main'

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
        There are {this.props.data.allUsers.length} users in the database.

      </Container>
    )
  }
}

