import gql from 'graphql-tag';
import * as React from 'react';
import Link from 'next/link'
import { graphql } from 'react-apollo';
import { withData } from '../lib/next-apollo-hoc'

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
      <div>
        <nav>
          <Link href='/'><a>Home</a></Link>
          <Link href='/about'><a>About</a></Link>
        </nav>
        {
          this.props.data.allUsers.map((e) => (<li>{e.lastName}</li>))
        }
      </div>
    )
  }
}

