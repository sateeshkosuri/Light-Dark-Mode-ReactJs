import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onButtonClick = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    const {isDarkMode} = this.state
    const isBackgroundChange = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'light Mode' : 'Dark Mode'
    return (
      <div className="app-container">
        <div className={`container ${isBackgroundChange}`}>
          <h1 className="main-heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
