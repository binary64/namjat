import * as React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'antd';

const POSTS_PER_PAGE = 10

const Container = (children) => <div>{children}</div>
function PostList({
  data: { loading, error, allPosts, _allPostsMeta },
  loadMorePosts
}) {
  if (error) return <div message="Error loading posts." />
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <Container>
        <div>
          {allPosts.map((post, index) => (
            <div>{post.url} - {post.title}</div>
          ))}
        </div>
        {areMorePosts ? (
          <Button onClick={() => loadMorePosts()}>
            {loading ? 'Loading...' : 'Show More'}
          </Button>
        ) : (
            ''
          )}
      </Container>
    )
  }
  return <div>Loading...</div>
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(PostList)
