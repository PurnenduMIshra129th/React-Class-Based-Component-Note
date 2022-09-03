import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()


    //   this  is second approch

    //   this.cbRef = null
    //   this.setCbRef = element =>{
    //       this.cbRef = element
    //   }
    
     
      }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    clickHandler =()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
          <input type='text' ref={this.inputRef}/>

          {/* second aproch code */}
{/* 
          <input type='text' ref ={this.setCbRef}/> */}
          <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default Refs