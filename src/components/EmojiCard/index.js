// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const OnClickEmojiItem = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojis-list-container">
      <button type="button" className="emoji-button" onClick={OnClickEmojiItem}>
        <img src={emojiUrl} alt={emojiName} className="emojis" />
      </button>
    </li>
  )
}

export default EmojiCard
