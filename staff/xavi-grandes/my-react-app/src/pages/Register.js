import log from '../utils/coolog'
import registerUser from '../logic/registerUser'  // TODO


function Register({onNavigateToLogin, onRegister}) {
    log.info('Register -> render ')

    const handleNavigateToLogin = (event) => {
    log.info('Register -> handleNavigateToLogin')

      event.preventDefault()
  
      onNavigateToLogin()
    }
  
    const handleRegister = (event) => {
    log.info('Register -> handleRegister')

      event.preventDefault()
  
    //   const form = event.target
  
    //   const nameInput = form.name
    //   const emailInput = form.email
    //   const passwordInput = form.password
  
    //   const name = nameInput.value
    //   const email = emailInput.value
    //   const password = passwordInput.value


    // del form (event.target) recojo el name=name del input name y le indico que su valor se llamará name, lo mismo con email y password
      const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target
   
      try {
        registerUser(name, email, password, error => {
            if (error) {
                alert(error.message)

                return
            }

            onRegister()
        })
      } catch (error) {
        alert (error.message)

        event.target.password.value = ''
      }
    }
  
    return (
      <div className="w-64 border rounded-md border-gray-900 flex flex-col p-4 bg-white">
        <h1 className="text-xl font-bold">REGISTER</h1>
        <hr className="border-gray-900 my-2" />
        <form onSubmit={handleRegister} className="flex flex-col text-center">
          <div className="flex flex-col gap-1 my-1">
            <label className="self-start" htmlFor="name">Name</label>
            <input
              className="pl-1 bg-gray-200 border-b-2 border-gray-500 "
              type="text"
              name="name"
              id="name"
              placeholder="Input your name"
              pattern="[a-zA-Z]{1,}"
              required=""
            />
          </div>
          <div className="flex flex-col gap-1 my-1">
            <label className="self-start" htmlFor="email">E-mail</label>
            <input 
              className="pl-1 bg-gray-200 border-b-2 border-gray-500 "
              type="email"
              name="email"
              id="email"
              placeholder="input your email"
              required=""
            />
          </div>
          <div className="flex flex-col gap-1 my-1">
            <label className="self-start" htmlFor="registerPassword">Pasword</label>
            <input
              className="pl-1 bg-gray-200 border-b-2 border-gray-500"
              type="password"
              name="password"
              id="registerPassword"
              placeholder="Input your password"
              required=""
              minLength="8"
              title="Use min 8 characters for the password"
            />
          </div>
          <button className="mt-4 p-1 w-full border border-gray-900 rounded-md bg-red-500 hover:bg-red-600 text-center text-white">Register</button>
        </form>
        <a onClick={handleNavigateToLogin} className="place-self-center cursor-pointer mt-2">Log In</a>
      </div>
    );
  }

export default Register