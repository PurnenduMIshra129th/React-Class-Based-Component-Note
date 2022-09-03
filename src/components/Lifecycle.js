import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'purnendu'
      }
      console.log('Life CycleA Constructer');
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life CycleA getDerivedStatefromProps');
        return null
    }
    componentDidMount(){
        console.log('lifecycleA ComponentDidMount');
    }
  render() {
      console.log('lifecycleA Render');
    return (
       
      <div>LifecycleA</div>
    )
  }
}

export default Lifecycle