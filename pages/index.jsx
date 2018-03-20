import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import { withData } from '../lib/next-apollo-hoc'
import Container from '../containers/main'

@withData
@graphql(gql`
  query AllUsersQuery {
    allUsers {
      firstName
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
        {
          this.props.data.allUsers.map((e, i) => (<li key={i}>{e.firstName}</li>))
        }
      </Container>
    )
  }
}

