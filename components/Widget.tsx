import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withData } from '../lib/apollo'

class Widget extends React.Component {
  render() {
    return <div>{this.props.data[this.props.dataKey].length}</div>
  }
}

export default class extends React.Component {
  render() {
    const WidgetWithData = graphql(gql`${this.props.gql}`)(Widget)
    return <WidgetWithData dataKey={this.props.dataKey} />
  }
}


