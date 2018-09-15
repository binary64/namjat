import * as React from 'react'
import withData from '../lib/apollo'
import Container from '../containers/Main'
import Widget from '../components/Widget'
import Sticky from '../components/Sticky'
import LineTest from '../components/LineTest'
//import '../styles/App.less';

export default withData(props => (
    <Container>
      <Sticky><h1>Dynamic widgets (runtime)</h1></Sticky>
      Number of users: <Widget gql={`
            query {
              _allUsersMeta {
                count
              }
            }
          `} widget="single" dataKey1='_allUsersMeta' dataKey2='count' />
    </Container>
  )
)
