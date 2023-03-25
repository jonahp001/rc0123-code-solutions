export default function CustomButton({text, color, onCustomClick}) {
  function CustomClick() {
    onCustomClick(text)
  }
  return (
    <button onClick={CustomClick} style={{backgroundColor: color}}>{text}</button>
  )
}
