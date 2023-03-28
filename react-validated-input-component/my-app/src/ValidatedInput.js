import './ValidatedInput.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ValidatedInput() {
  const [password, setPassword] = useState('')

  let passwordMessage = "A password is required."
  let icon = faXmark
  let color = 'red'

  if (password.length > 0 && password.length < 8) {
    passwordMessage = "Your password is too short."
  } else if (password.length >= 8) {
    passwordMessage = ''
    icon = faCheck
    color = 'green'
  }

  return (
    <>
      <h1>Password</h1>
      <form>
        <input
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <FontAwesomeIcon color={color} className='passwordIcon' icon={icon} />
      </form>
      <h2>{passwordMessage}</h2>
    </>
  )
}
