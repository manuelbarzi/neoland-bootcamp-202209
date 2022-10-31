let nickName

function LoginPage(props) {
    log('INFO', 'LoginPage', 'pages/LoginPage.jsx')

    const handleClick = event => {
        log('DEBUG', 'go to register page', 'pages/LoginPage.jsx')
        event.preventDefault()

        const onRegisterClick = props.onRegisterClick

        onRegisterClick()
    }

    const handleSubmit = event => {
        log('DEBUG', 'send login', 'LoginPage.jsx')
        event.preventDefault()

        const form = event.target

        const emailInput = form.email
        const passwordInput = form.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            user = authenticateUser(email, password)

            const onLoggedIn = props.onLoggedIn

            nickName = user.name

            onLoggedIn()
        } catch(error) {
            
            passwordInput.value = ''
        }
    }

    return <main className="">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="login-email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="login-password" className="container__item--left">Password</label>
            <input name="password" type="password" id="login-password" placeholder="input your password" className="border-b border-black" />
            <button className="">Login</button>
        </form>

        <a href="" className="underline" onClick={handleClick}>Register</a>
    </main>
}