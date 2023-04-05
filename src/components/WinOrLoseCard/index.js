// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const winOrLoseImage = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <>
      <div className="mobile-result-container">
        <div className="image-container">
          <img src={winOrLoseImage} alt="win or lose" className="result-logo" />
        </div>
        <div className="description-container">
          <h1 className="status">{gameStatus}</h1>
          <p className="label">{scoreLabel}</p>
          <p className="score-card">{score}/12</p>
          <button
            type="button"
            onClick={onClickPlayAgain}
            className="play-again-button"
          >
            Play Again
          </button>
        </div>
      </div>

      <div className="pc-result-container">
        <div className="description-container">
          <h1 className="status">{gameStatus}</h1>
          <p className="label">{scoreLabel}</p>
          <p className="score-card">{score}/12</p>
          <button
            type="button"
            onClick={onClickPlayAgain}
            className="play-again-button"
          >
            Play Again
          </button>
        </div>
        <div className="image-container">
          <img src={winOrLoseImage} alt="win or lose" className="result-logo" />
        </div>
      </div>
    </>
  )
}

export default WinOrLoseCard
