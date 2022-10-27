function LoginPage(props) {
    const hadleClick = (event) => {
        log('INFO', 'RegisterPage -> render')
        event.preventDefault()

        const onRegisterLinkClick = props.onRegisterLinkClick

        onRegisterLinkClick()
    }


    const handleSubmit = (event) => {
        log('INFO', 'Submit Login')
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

    return (
        <main className="h-screen">
            <div className="h-full flex flex-col flex-wrap justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
                <h1 className="text-center text-white text-lg pb-4">
                    Sign in to continue to Home
                </h1>
                <form className="flex flex-col justify-start w-96 gap-1 px-12 py-14 rounded bg-white" onSubmit={handleSubmit}>
                    <img
                        src="img/logologintrello.png"
                        className="self-center w-2/5 mb-8"
                    />
                    <label htmlFor="loginEmail"></label>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        id="loginEmail"
                        required=""
                        title="Please use @ and . on your email"
                        className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2"
                    />
                    <label htmlFor="loginPassword"></label>
                    <input
                        name='password'
                        type="password"
                        placeholder="Password"
                        id="loginPassword"
                        required=""
                        title="Please enter at least 8 characters without spaces"
                        className="h-10 border-gray-400 border-2 rounded border-solid text-slate-800 text-base pl-2"
                    />
                    <span className="flex">
                        <input type="checkbox" />
                        <label className="text-xs mx-2 my-3">Show password</label>
                    </span>
                    <button className="w-full h-8 self-start rounded border-none text-white font-bold bg-gradient-to-br from-cyan-500 to-blue-500">
                        Sign in
                    </button>
                </form>
                <a href="" className="mt-2 text-white text-base hover:text-black" onClick={hadleClick}>
                    Create an account
                </a>
            </div>
        </main>
    );
}
