
import React from "react";
import { Component } from "react";

class State extends Component{
    constructor(){
        super()
        this.state = {
            message:'welcome visitor'
        }
    }
    changeMessage(){
        this.setState(
            {
                message:'thank you for subscribing'
            }
        )
    }
    render(){
        return (
        
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subcribe</button>
            </div>
            )


    }

}
export default State
