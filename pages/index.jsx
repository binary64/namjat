import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';
import Link from 'next/link'
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
        <nav>
          <Link href='/'><a>Home</a></Link>
          <Link href='/about'><a>About</a></Link>
        </nav>
        <ul>
          {
            this.props.data.allUsers.map((e) => (<li>{e.firstName}</li>))
          }
        </ul>
      </div>
    )
  }
}

