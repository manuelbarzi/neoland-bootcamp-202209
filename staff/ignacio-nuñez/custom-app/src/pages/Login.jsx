import authenticateUser from "../logic/authenticate-user"

function Login(props) {
    const handleSubmit = event => {
        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(userId => {
                    sessionStorage.userId = userId

                    props.onAuthenticate()
                })
                .catch(error => {
                    alert(error.message)

                    event.target.password.value = ''
                })
        } catch (error) {
            alert(error.message)

            event.target.password.reset()
        }

    }

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    return (<div className="flex h-full justify-center items-center bg-rose-700">
            <form onSubmit={handleSubmit} className="w-1/5 shadow-xl bg-orange-500 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
                <h2 className='text-2xl font-bold'>Log in</h2>
                <label htmlFor="email" className="self-start">E-mail</label>
                <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="email" placeholder="Input your E-mail" name="email" id="email" />
                <label htmlFor="password" className="self-start">Password</label>
                <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="password" id="password" />
                <button className="p-1 border-solid border-black border-2 rounded-lg mt-3.5 w-full bg-orange-200">Log in</button>
                <hr className="w-full border-black mt-3.5" />
                <div className="div-register mt-2">
                    <p>Didnt have an account?</p>
                    <a href='' onClick={handleRegisterClick} className="p-1 border-solid border-black border-2 block text-center rounded-lg rounded-lg mt-3.5 w-full bg-orange-200">Register</a>
                </div>
            </form>
        </div>)
}

export default Login