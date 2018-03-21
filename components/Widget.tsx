import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withData } from '../lib/apollo'

class Widget1 extends React.Component {
  render() {
    if (this.props.data.error) throw new Error(this.props.data.error)
    return <div>Widget1({this.props.data.loading ? 'Loading' : this.props.data[this.props.dataKey1][this.props.dataKey2]})</div>
  }
}

class Widget2 extends React.Component {
  render() {
    if (this.props.data.error) throw new Error(this.props.data.error)
    return <div>Widget2({this.props.data.loading ? 'Loading' : this.props.data[this.props.dataKey1][this.props.dataKey2]})</div>
  }
}

export default class extends React.Component {
  mappings = {
    widget1: Widget1,
    widget2: Widget2,
  }
  render() {
    const WidgetWithData = graphql(gql`${this.props.gql}`)(this.mappings[this.props.widget])
    return <WidgetWithData {...this.props} />
  }
}


