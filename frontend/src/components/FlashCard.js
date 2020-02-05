import React, { Component } from 'react'

class FlashCard extends Component {

constructor(){
  super()

  this.state = {
    currentCard: {},
    toggle: null
  }
  this.clickCard = this.clickCard.bind(this)
}

coolFunction(){
const randomNum = Math.floor(Math.random() * this.props.words.length + 1);
  if(this.props.words.length > 0){
    return (
      <h1>{this.props.words[randomNum].front}</h1>
    )
  }
}

setCurrentCard(){
  const randomNum = Math.floor(Math.random() * this.props.words.length);
  this.setState({
    currentCard: this.props.words[randomNum],
    toggle: true
  })
  console.log(this.state.currentCard)
}

clickCard(e){
  console.log("hello")
  console.log(this.state.currentCard.back)
  this.setState({
    toggle: true
  })
  return  (
    <h1>{this.state.currentCard.back}</h1>
  )
}

renderCardBack(){
  this.setState({
    toggle: false
  })
}

setToggle(){
  this.setState({
    toggle: true
  })
}

renderCardSides(){
  if(this.state.toggle === true){
    return (
      <h1 onClick={()=>this.renderCardBack()}>{this.state.currentCard.front}</h1>
    )
  } else if (this.state.toggle === false) {
    return (
      <h1 onClick={()=>this.setToggle()}>{this.state.currentCard.back}</h1>
    )
  }
}



  render(){
    return (
      <div className="flashcard">
      <button onClick={()=>this.clickCard()}>click here!</button>
      {this.renderCardSides()}
      </div>
    )
  }
}

export default FlashCard
