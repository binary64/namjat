import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import Link from 'next'
import { withData } from '../lib/next-apollo-hoc'

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
      <div>
        <Link><a href='/'>Index</a></Link>
        <Link><a href='/about'>About</a></Link>
        <ul>
          {
            this.props.data.allUsers.map((e) => (<li>{e.firstName}</li>))
          }
        </ul>
      </div>
    )
  }
}

