function LoginPage(props) {

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

            log('INFO', `User ${user} successfully logged in`)

            const onLoggedIn = props.onLoggedIn

            onLoggedIn()

        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }
    }

    return <main className="h-full w-full flex flex-col items-center justify-center bg-pink-600">
        <div className="bg-white flex flex-col border rounded-lg p-3">
            <form className="flex flex-col items-center justify-center gap-2 m-2 form" onSubmit={handleSubmit}>
                <label htmlFor="email" className="label">Your email</label>
                <input type="email" name="email" placeholder="enter your email" className="border rounded-md" />
                <label htmlFor="password" className="label">Your password</label>
                <input type="password" name="password" placeholder="enter your password" className="border rounded-md" />
                <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg text-sm">Login</button>
            </form>
            <a href="" onClick={handleClick}>Register</a>
        </div>
    </main>

}

