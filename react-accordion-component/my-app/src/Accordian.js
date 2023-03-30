import { useState } from "react"
import './Accordian.css'

export default function Accordian({topicsAndDetails}) {
  const [isActive, setIsActive] = useState(false)

  function handleClick(key) {
    // must check which 'key' is being click and matches id, then turns true
    setIsActive(isActive !== key ? key : null)
  }

  const topsAndDeets = topicsAndDetails.map(item =>
  <Topic
  key={item.id}
  onClick={() => handleClick(item.id)}
  topicName={item.topicName}
  details={item.topicDetails}
  isActive={isActive === item.id}
  />
  )

  return (
    <div>
      {topsAndDeets}
    </div>
  )
}

function Topic({onClick, topicName, details, isActive}) {
  return (
    <>
      <h3 onClick={onClick}>{topicName}</h3>
      {isActive && <p>{details}</p>}
    </>
  )
}
