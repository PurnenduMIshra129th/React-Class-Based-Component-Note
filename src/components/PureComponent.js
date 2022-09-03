import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
  render() {
    return (
      <div> purecomp
          {this.props.name}
      </div>
    )
  }
}

export default Purecomp
//rpce snippet extension