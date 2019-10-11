import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import styled, { keyframes, cubic } from 'styled-components'

const generateRandom = ceil => Math.trunc(Math.random() * ceil + 1)

const App = () => {
  const [dice, setDice] = React.useState('')
  const [play, setPlay] = React.useState(false)

  const face = 60
  const minRoll = 24 * face
  const animationBezier = 'cubic-bezier(.68,-0.51,.19,.69)';

  const rotate = keyframes`
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(-${dice + minRoll}deg);
    }
  `

  const Ruleta = play ? styled.div`
    animation: ${rotate} 5.5s ${animationBezier} 0s 1 forwards;
  ` : styled.div``

  const handleTwister = e => {
    const element = document.querySelector('.palanca')
    element.style.transform = 'rotateX(180deg)'
    setTimeout(() => {
      element.style.transform = 'rotateX(0deg)'
    }, 500)
    const amount = generateRandom(100) % 6
    setDice(amount * face)
    setPlay(true)
  }

  return (
    <div>
      <div className="palanca" onClick={handleTwister}>
        <div></div>
        <div></div>
      </div>
      <div className="app">
        <Ruleta className="ruleta">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </Ruleta>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));