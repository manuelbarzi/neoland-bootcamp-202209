function LoginPage(props) {
    log('INFO', 'LoginPage -> render')

    const handleClick = event => {
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
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }
    }

    return <main className="flex flex-col p-3 border-4 border-sky-500 bg-sky-200">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="login-email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="pl-2" />
            <label htmlFor="login-password" className="container__item--left">Password</label>
            <input name="password" type="password" id="login-password" placeholder="input your password" className="pl-2" />
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
        <a href="" className="underline w-fit place-self-end" onClick={handleClick}>Register</a>
    </main>
}


