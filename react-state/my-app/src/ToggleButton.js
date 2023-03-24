import { useState } from "react"

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked, "-- the value returned by useState")

  function handleClick() {
    console.log(isClicked, "-- the value returned by useState BEFORE calling state setter function")
    setIsClicked(!isClicked)
    console.log(isClicked, "-- the value returned by useState AFTER calling state setter function")
  }

  if (isClicked === true) {
    const color = 'red'
    return <button onClick={handleClick} style={{ backgroundColor: color }} >I'm different</button>
  }

  return <button onClick={handleClick} style={{backgroundColor: color}} >{text}</button>
}
