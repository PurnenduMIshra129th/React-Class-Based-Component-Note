import React from "react";
import { Component } from "react";

class Likun extends Component{
    render(props){
        return (
        
            <h1>fuck just {this.props.name}</h1>)


    }

}
export default Likun

//here i pass the props by using this.props.name  but in function it is only send by props.name
// function Likun(props) {
//     return(
// <div> 
// <h1>
//     hello {props.name} his original name is {props.heroName}  
// </h1>
// <button>
//    helo
// </button>
// </div> 
//     )
    
// }

