import React, { Component } from 'react'
import { UserConsumer } from './ContexrUser'

 class ContextF extends Component {
  render() {
    return (
     <UserConsumer>
         {
             (UserName)=>{
                return<div>Hello{UserName}</div>
             }
         }
     </UserConsumer>
    )
  }
}
//step-3 add userconsumer 

export default ContextF