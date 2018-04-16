import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import { Manager, Reference, Popper } from 'react-popper'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      click: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false, click: false })
  }

  handleMouseDown = () => {
    this.setState({ click: true, hover: false })
  }

  render() {
    console.log(this.state)
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <button type="button" ref={ref}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onMouseDown={this.handleMouseDown}
            >
              Reference
            </button>
          )}
        </Reference>
        {this.state.hover && ReactDOM.createPortal(
          <Popper
            placement="auto"
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}>
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                Hover
                <div ref={arrowProps.ref} style={arrowProps.style}>
                  <div style={{width:'10px', height: '10px', borderRadius: '50%', background: 'red'}}/>
                </div>
              </div>
            )}
          </Popper>,
          document.querySelector('#poop')
        )}
        {this.state.click && ReactDOM.createPortal(
          <Popper
            placement="top"
            modifiers={{ preventOverflow: { enabled: true } }}
            eventsEnabled={true}
            positionFixed={false}>
            {({ placement, ref, style, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                Down
                <div ref={arrowProps.ref} style={arrowProps.style}>
                  <div style={{width:'10px', height: '10px', borderRadius: '50%', background: 'red'}}/>
                </div>
              </div>
            )}
          </Popper>,
          document.querySelector('#poop')
        )}
      </Manager>
    )
  }
}

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
