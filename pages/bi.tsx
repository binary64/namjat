import gql from 'graphql-tag';
import * as React from 'react';
import { graphql } from 'react-apollo';
import * as ReactGridLayout from 'react-grid-layout';
import withData from '../lib/apollo'
import Container from '../containers/Main'
import Sticky from '../components/Sticky'
import Widget from '../components/Widget'
import { Textfit } from 'react-textfit';

@withData
@graphql(gql`
  query AllUsersQuery {
    allUsers(first: 15) {
      firstName
    }
  }
`)
export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props)
    this.state = props;
  }

  static getInitialProps() {
    console.log("getInitialProps");
    return {
      widgets: [
        {
          title: 'test 1', //title
          gql: `
          query {
            _allUsersMeta {
              count
            }
          }
        `, //the query
          widget: 'single', //the type
          dataKey1: '_allUsersMeta', //ignore these
          dataKey2: 'count' //ignore these
        },
        {
          title: 'test 2',
          gql: `
          query {
            _allPostsMeta {
              count
            }
          }
        `,
          widget: 'array',
          dataKey1: '_allPostsMeta',
          dataKey2: 'count'
        },
        {
          title: 'test 3',
          gql: `
          query {
            _allUsersMeta {
              count
            }
          }
        `,
          widget: 'pie',
          dataKey1: '_allUsersMeta',
          dataKey2: 'count'
        }
      ]
    }
  }

  componentWillMount() {

  }
  render() {
    if (!this.props.data.allUsers) return (
      <div>Loading!</div>
    )
    return (
      <Container>
        <Sticky><h1>bi</h1></Sticky>
        <ReactGridLayout layout={[
          { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
          { i: 'b', x: 3, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
          { i: 'c', x: 7, y: 0, w: 1, h: 2 }
        ]}
          width='900'
          cols='12'
          style={{
            backgroundColor: 'grey',
            position: 'absolute'
          }}
        >
          {this.state.widgets.map((e, i) => (
            <div data-box="true" data-index={i} key={i} title={e.gql} style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column' }} >
              <h5>{e.title}</h5>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                height: '100%',
                overflow: 'hidden'
              }}>
                {/* <Widget {...e}  /> */}
              </div>
            </div>
          ))}

        </ReactGridLayout>
      </Container>
    )
  }
}
