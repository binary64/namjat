import * as React from 'react';

export default class Sticky extends React.Component {
  // state = {
  //   blah: 1
  // }

  componentDidMount() {
    // const w = this.refs.master.scrollWidth
    // const h = this.refs.master.scrollHeight
    // const t = this.refs.master.scrollTop
    // console.log('width: ' + w)
    // console.log('height: ' + h)
    // this.refs.master.style.position = 'fixed'
    // this.refs.master.style.backgroundColor = 'rgb(240, 242, 245)'
    // this.refs.master.style.pointerEvents = 'none'
    // this.refs.master.style.top = 64
    // this.refs.master.style.marginTop = '5vmin'

    // this.refs.master.style.width = 581
    // this.refs.master.style.height = 56 + 64
    // const $parent = $(this.refs.master).parent()
    // debugger
    // if (this.state.blah !== h) this.setState({ blah: h })
  }

  render() {
    return (
      <div style={{
        position: 'sticky',
        top: '-5vmin', //TODO: get dyamically at runtime
        backgroundColor: 'rgb(240, 242, 245)' //TODO: get dyamically at runtime
      }}>{this.props.children}</div>

      // <div style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
      //   <div ref='master' style={{ width: '100%' }}>
      //     <h1>{this.props.title}</h1>
      //   </div>
      //   <div style={{ flex: 1, overflowX: 'scroll', width: '100%' }}>
      //     {this.props.children}
      //   </div>
      // </div>
    )
  }
}
