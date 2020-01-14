import React, { Component } from 'react'

class FlashCard extends Component {

constructor(){
  super()

  this.state = {
    currentCard: {}
  }
  // this.clickCard = this.clickCard.bind(this)
}

// coolFunction(){
// const randomNum = Math.floor(Math.random() * this.props.words.length + 1);
//   if(this.props.words.length > 0){
//     return (
//       <h1>{this.props.words[randomNum].front}</h1>
//     )
//   }
// }

setCurrentCard(){
  const randomNum = Math.floor(Math.random() * this.props.words.length);
  this.setState({
    currentCard: this.props.words[randomNum]
  })
  console.log(this.state.currentCard)
}

clickCard(e){
  console.log(e)

}



  render(){
    return (
      <div className="flashcard" onClick={()=>this.setCurrentCard()}>


      </div>
    )
  }
}

export default FlashCard
