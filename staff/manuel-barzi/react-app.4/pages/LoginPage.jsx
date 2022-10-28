function LoginPage(props) {
    log('INFO', 'LoginPage -> render')

    const handleNavigateToRegister = event => {
        event.preventDefault()

        const onNavigateToRegister = props.onNavigateToRegister

        onNavigateToRegister()
    }

    const handleLogin = event => {
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

    return <main className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="login-email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="login-password" className="container__item--left">Password</label>
            <input name="password" type="password" id="login-password" placeholder="input your password" className="border-b border-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Login</button>
        </form>

        <a href="" className="underline" onClick={handleNavigateToRegister}>Register</a>
    </main>
}