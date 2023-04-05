/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    gameStatus: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], gameStatus: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetupScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > newScore) {
      newScore = currentScore
    }

    this.setState({topScore: newScore, gameStatus: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetupScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndSetupScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list">
        {shuffledEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojisList, gameStatus} = this.state
    return (
      <>
        <Navbar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          gameStatus={gameStatus}
        />
        <div className="emoji-container">
          {gameStatus ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </>
    )
  }
}

export default EmojiGame
