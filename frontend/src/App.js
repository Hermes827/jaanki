import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCard from './components/FlashCard.js'
import WelcomePage from './components/WelcomePage.js'

class App extends React.Component {

constructor(){
  super()
  this.state = {
    stuff: []
  }

  this.createNewUser = this.createNewUser.bind(this)

}

componentDidMount(){
  fetch("http://localhost:3000/api/v1/cards")
  .then(res => res.json())
  .then(data => {
    this.setState({
      stuff: data
    })
    console.log(this.state.stuff)
  })
}

createNewUser(){
  console.log("hello")
}

// <FlashCard words={this.state.stuff}/>

  render(){

  return (
    <div className="app">
    <h1>Welcome to Jaanki!</h1>
    <button onClick={()=> this.createNewUser()}>signup!</button>
    <button>login</button>
    </div>
  )
}
}

export default App;
