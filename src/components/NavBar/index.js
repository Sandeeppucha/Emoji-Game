// Write your code here.

import './index.css'

const Navbar = props => {
  const {currentScore, topScore, gameStatus} = props
  return (
    <div className="navbar-container">
      <div className="left-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>

      {gameStatus && (
        <div className="right-container">
          <p className="emoji-score">Score: {currentScore}</p>
          <p className="emoji-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
