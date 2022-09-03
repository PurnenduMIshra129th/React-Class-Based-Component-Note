  import React, { Component } from 'react'

 class EventBinding extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:"hello"
       }
       //2nd approch
       //this.display = this.display.bind(this)
     }
     display(){
         this.setState(
             {message:"good bye"}
         )
         console.log(this);
     }

//third approch
    //  display =()=>{
    //      this.setState({
    //          message:"goodbye"
    //      })
    //  }
    
  render() {
    return (
      <div>
          {/* first approch */}
          <h1>{this.state.message}</h1>
          <button onClick={this.display.bind(this)} >click</button>
          
          {/* for 2nd approch */}
          {/* <button onClick={this.display} >click</button> */}

          {/* third approch */}
          {/* <button onClick={this.display}>click</button> */}
          

      </div>
    )
  }
}
console.log(this);

export default EventBinding