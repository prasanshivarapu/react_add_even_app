// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  btn = () => {
    this.setState(p => ({
      count: p.count + Math.ceil(Math.random(0.1, 1) * 100),
    }))
  }

  get2 = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Count is even'
    }
    return 'Count is odd'
  }

  render() {
    const count2 = this.get2()
    const {count} = this.state
    return (
      <div className="greet1">
        <div className="greet2">
          <div>
            <h1>Count {count}</h1>
            <p>{count2}</p>
            <button type="button" onClick={this.btn}>
              {' '}
              Increment
            </button>
            <p>
              Increase by random number <br /> between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
