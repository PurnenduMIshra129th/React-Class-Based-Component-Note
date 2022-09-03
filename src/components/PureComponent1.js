import React, { Component, PureComponent } from 'react'
import PureComponent2 from './PureComponent2'
import Purecomp from './PureComponent'

export class PureComponent1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'purnendu'
      }
     
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'likun'
            })
        })
    }
  render() {
    return (
      <div>
          Parent Component
          <PureComponent2 name={this.state.name}/>
          <PureComponent name={this.state.name}/>
      </div>
    )
  }
}

export default PureComponent1