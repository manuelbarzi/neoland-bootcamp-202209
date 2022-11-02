function Register(props) {
    log('INFO', 'Register -> render')

    const handleNavigateToLogin = event => {
        log('INFO', 'Register -> handleNavigateToLogin')

        event.preventDefault()

        props.onNavigateToLogin()
    }

    const handleRegister = event => {
        log('INFO', 'Register -> handleRegister')

        event.preventDefault()

        const form = event.target

        const nameInput = form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password)
    
            props.onRegister()
        } catch(error) {
            alert(error.message)
    
            passwordInput.value = ''
        }
    }

    return <main className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-2" onSubmit={handleRegister}>
            <label htmlFor="register-name" className="container__item--left">Name</label>
            <input name="name" type="name" id="register-name" placeholder="input your name" className="border-b border-black" />
            <label htmlFor="register-email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="register-email" placeholder="input your email" className="border-b border-black" />
            <label htmlFor="register-password" className="container__item--left">Password</label>
            <input name="password" type="password" id="register-password" placeholder="input your password" className="border-b border-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Register</button>
        </form>
        <a href="" className="underline" onClick={handleNavigateToLogin}>Login</a>
    </main>
}