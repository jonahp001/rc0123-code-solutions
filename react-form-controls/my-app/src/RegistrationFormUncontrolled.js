export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formDataEntries = Object.fromEntries(formData.entries())
    console.log('state:', formDataEntries)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username"/>
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button>Sign Up</button>
    </form>
  )
}
