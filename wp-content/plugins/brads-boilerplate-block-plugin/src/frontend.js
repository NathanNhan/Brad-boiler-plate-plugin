import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const [showSkyColor, setShowSkyColor] = useState(false)
  const [showGrassColor, setShowGrassColor] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function handleAnswer (e) {
    if (props.select === e.target.innerText) {
      console.log('Your correct answer');
      setShowModal(true);
    }
  }
  return (
    <div className="boilerplate-frontend">
      <p>
        <button onClick={() => setShowSkyColor(prev => !prev)}>Toggle view sky color!</button>
        {showSkyColor && <span>{props.skyColor}</span>}
      </p>
      <p>
        <button onClick={() => setShowGrassColor(prev => !prev)}>Toggle view grass color!</button>
        {showGrassColor && <span>{props.grassColor}</span>}
      </p>
      <p>
        {props.select && <span>{props.select}</span>}
      </p>
      <p>what is a fast food ?</p>
      <p onClick={handleAnswer}>Steak</p>     
      <p onClick={handleAnswer}>Hamburger</p>
      <p onClick={handleAnswer}>Bread</p>  
      {showModal && <span>Your answer is correct!</span>}
    </div>
  )
}
