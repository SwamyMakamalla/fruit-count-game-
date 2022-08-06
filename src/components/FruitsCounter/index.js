// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="images-alignment">
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-mr">
                <button
                  className="button"
                  type="button"
                  onClick={this.eatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-mr">
                <button
                  className="button"
                  type="button"
                  onClick={this.eatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
