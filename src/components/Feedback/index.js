// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {display: 'sub-container-show', display2: 'sub-container2-hidden'}

  changeSlide = () => {
    this.setState({
      display: 'sub-container-hidden',
      display2: 'sub-container2-show',
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {display, display2} = this.state
    const classes1 = `sub-container ${display}`
    const classes2 = `sub-container  ${display2}`

    return (
      <div className="main-container">
        <div className={classes1}>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(each => (
              <li className="each-emoji" key={each.id}>
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="emojiImage"
                  onClick={this.changeSlide}
                />
                <p className="emoji-name">{each.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes2}>
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="thankyou">Thank You!</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
