import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import { Manager, Reference, Popper } from 'react-popper'

const Example = () => (
  <Manager>
    <Reference>
      {({ ref }) => (
        <button type="button" ref={ref}>
          Reference
        </button>
      )}
    </Reference>
    {ReactDOM.createPortal(
      <Popper
        placement="auto"
        modifiers={{ preventOverflow: { enabled: false } }}
        eventsEnabled={true}
        positionFixed={false}>
        {({ placement, ref, style, arrowProps }) => (
          <div ref={ref} style={style} data-placement={placement}>
            Popper
            <div ref={arrowProps.ref} style={arrowProps.style}>
              <div style={{width:'10px', height: '10px', borderRadius: '50%', background: 'red'}}></div>
            </div>
          </div>
        )}
      </Popper>,
      document.querySelector('#poop')
    )}
  </Manager>
)

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moo: false
    }
  }

  componentDidMount() {
    this.setState({
      moo: true
    })
  }

  render() {
    return (
    <div id='poop' style={{height: '100vh'}}>
      {this.state.moo && <Example />}
      <Link to="/">Go back to the homepage</Link>
    </div>
  )}
}

export default SecondPage
