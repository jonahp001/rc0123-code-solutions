import './HotButton.css';
import { useState } from 'react';

export default function HotButton({bgColor, textColor}) {
  const [i, setI] = useState(0)

  function handleClick() {
    setI(i + 1);
  }

  if (i < 4) {
    bgColor='indigo';
    textColor='white'
  } else if (i < 7) {
    bgColor = 'purple';
    textColor = 'white'
  } else if (i < 10) {
    bgColor = 'red';
    textColor = 'white'
  } else if (i < 13) {
    bgColor = 'orange';
    textColor = 'black'
  } else if (i < 16) {
    bgColor = 'yellow';
    textColor = 'black'
  } else if (i >= 16) {
    bgColor = 'white';
    textColor = 'black'
  }

  return (
    <button onClick={handleClick} className="HotButton" style={{backgroundColor: bgColor, color: textColor}} >Hot Button</button>
  )
}
