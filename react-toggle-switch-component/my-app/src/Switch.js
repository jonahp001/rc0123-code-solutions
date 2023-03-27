import './Switch.css'
import { useState } from 'react';

export default function Switch({text, bgColor, toggleButton}) {
  const [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled)
  }

  if (toggled === true) {
    bgColor="white"
    toggleButton = "SwitchButtonOFF"
    text="OFF"
  }

  else if (toggled === false) {
    toggleButton ="SwitchButtonON"
  }

  return (
    <div className="FlexDivOfSwitch">
      <div onClick={handleClick} className="DivOfSwitch">
        <button style={{backgroundColor: bgColor}} className="SwitchBg"></button>
        <button className={toggleButton}></button>
        <h1 className="SwitchText">{text}</h1>
      </div>
    </div>
  )
}
