function LoginPage (props){

  const handleClick = (event) => {
    event.preventDefault()

    const onRegisterClick = props.onRegisterClick

    onRegisterClick()
  }

  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target

    const emailInput = form.email
    const passwordInput = form.password

    const email = emailInput.value
    const password = passwordInput.value

    try {
        user = authenticateUser(email, password)

        const onLoggedIn = props.onLoggedIn

        onLoggedIn()
    } catch(error) {
        alert(error.message)

        passwordInput.value = ''
    }
}


  return <div className="w-64 border rounded-md border-gray-900 flex flex-col p-4 bg-white">
  <h1 className="text-xl font-bold">LOG IN</h1>
  <hr className="border-gray-900 my-2" />
  <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-1 my-1">
      <label  htmlFor="loginemail">Email</label>
      <input
        className="pl-1 bg-gray-200 border-b-2 border-gray-500"
        type="email"
        name="email"
        id="loginemail"
        placeholder="input your email"
      />
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="loginPassword">Password</label>
      <input
        className="pl-1 bg-gray-200 border-b-2 border-gray-500"
        type="password"
        name="password"
        id="loginPassword"
        placeholder="input your password"
      />
    </div>
    <button className="mt-4 p-1 w-full border border-gray-900 rounded-md bg-red-500 hover:bg-red-600 text-center text-white">login</button>
  </form>
  <a onClick={handleClick} className="w-25 place-self-center cursor-pointer mt-2">Register</a>
</div>
}