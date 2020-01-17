import React, { Component } from 'react'

class WelcomePage extends Component {

constructor(){
  super()

  this.createNewUser = this.createNewUser.bind(this)
  }

  createNewUser(){
    console.log("hello")
  }

  render(){
    return (
      <div className="WelcomePage">
      <h1>Welcome to Jaanki!</h1>
      <button onClick={()=> this.createNewUser()}>signup!</button>
      <button>login</button>
      </div>
    )
  }
}

export default WelcomePage
