import gql from 'graphql-tag';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { withData } from '../lib/next-apollo-hoc'
import Container from '../containers/main'

@withData
@graphql(gql`
  query AllUsersQuery {
    allUsers {
      lastName
    }
  }
`)
export default class Blah extends React.Component {
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

