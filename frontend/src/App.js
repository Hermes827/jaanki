import React from 'react';
import logo from './logo.svg';
import './App.css';

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

coolFunction(){
const randomNum = Math.floor(Math.random() * this.state.stuff.length + 1);
  if(this.state.stuff.length > 0){
    return (
      <h1>{this.state.stuff[randomNum].front}</h1>
    )
  }
}

  render(){

  return (
    <div className="App">
      hello
      {this.coolFunction()}
    </div>
  )
}
}

export default App;
