import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCard from './components/FlashCard.js'

class App extends React.Component {

constructor(){
  super()
  this.state = {
    stuff: []
  }
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



  render(){

  return (
    <div className="App">
      <FlashCard words={this.state.stuff}/>
    </div>
  )
}
}

export default App;
