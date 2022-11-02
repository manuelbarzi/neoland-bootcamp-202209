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

    return <main className="fh-screen flex flex-col justify-center items-center ">
        <form className="p-5" onSubmit={handleLogin}>
            <label htmlFor="login-email" className="mr-2 mr-2 font-bold text-cyan-900 ">E-mail</label>
            <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="border-green-500 mr-2  focus:outline-0" />
            <label htmlFor="login-password" className="mr-2 font-bold text-cyan-700">Password</label>
            <input name="password" type="password" id="login-password" placeholder="input your password" className="border-green-500 mr-2  focus:outline-0" />
            <button className="bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100	rounded-md ml-3	hover:bg-blue-600">Login</button>
        </form>

        <a href="" className="text-rose-900 font-bold underline	bg-color-red block items-center mt-6 text-center" onClick={handleNavigateToRegister}>Register</a>
    </main>
}