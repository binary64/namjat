import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
//import { withData } from '../lib/apollo'
//import { withHighcharts, HighchartsChart, Chart, Title, Subtitle, Legend, XAxis, YAxis, LineSeries, /* etc... */ } from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
import HC from 'react-highcharts';
import LineTest from './LineTest'

class WidgetLine extends React.Component {
  render() {
    if (this.props.data.error) throw new Error(this.props.data.error)
    return <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      {this.props.data.loading ? 'Loading' : <LineTest />}
    </div>
  }
}

class WidgetPie extends React.Component {
  render() {
    if (this.props.data.error) throw new Error(this.props.data.error)
    return <HC config={{
      chart: {
        polar: true,
        borderWidth: 0,
        height: '447',
        width: '732'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }} />

  }
}

class WidgetNumber extends React.Component {
  render() {
    if (this.props.data.error) throw new Error(this.props.data.error)

    return <div>
      {this.props.data.loading ? 'Loading' : this.props.data[this.props.dataKey1][this.props.dataKey2]}
    </div>
  }
}

export default class extends React.Component {
  mappings = {
    'single': WidgetNumber,
    'array': WidgetLine,
    //'pie': withHighcharts(WidgetPie, Highcharts),
    //'table': Widget2,
  }
  render() {
    const WidgetWithData = graphql(gql`${this.props.gql}`)(this.mappings[this.props.widget])
    return <WidgetWithData {...this.props} />
  }
}


