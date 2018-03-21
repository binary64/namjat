import * as React from 'react'
import Trend from 'react-trend'

export default class extends React.PureComponent {
  render() {
    return <Trend
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
      gradient={['purple', 'violet']}
      radius={10.5}
      strokeWidth={1.1}
      strokeLinecap={'round'}
    />
  }
}
