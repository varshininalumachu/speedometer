import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
      console.log('accelerate triggered')
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container" alt="speedometer">
        <div className="speedo-container">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />

          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="accelerate-btn"
              onClick={this.onClickAccelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="break-btn"
              onClick={this.onClickBreak}
            >
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
