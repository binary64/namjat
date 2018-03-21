import * as React from 'react'
import { withData } from '../lib/apollo'
import Container from '../containers/Main'
import Widget from '../components/Widget'
import Sticky from '../components/Sticky'

@withData
export default class extends React.Component {
  render() {
    return (
      <Container>
        <Sticky><h1>Dynamic widgets (runtime)</h1></Sticky>
        Your name is: <Widget gql={`
          query {
            _allUsersMeta {
              count
            }
          }
        `} widget="widget1" dataKey1='_allUsersMeta' dataKey2='count' />
      </Container>
    )
  }
}
