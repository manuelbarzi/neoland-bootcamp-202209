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
        } catch(error) {
            alert(error.message)
    
            passwordInput.value = ''
        }
    }


    return <main className="h-screen flex flex-col justify-center items-center ">
        <form className="p-5" onSubmit = {handleSubmit}>
            <label htmlFor="login-email" className="mr-2 mr-2 font-bold text-cyan-900 ">E-mail</label>
            <input name ='email'type="email" id="login-email" className="border-green-500 mr-2  focus:outline-0" placeholder="Input your e-mail"/>
            <label htmlFor="login-password" className="mr-2 font-bold text-cyan-700">Password</label>
            <input name='password'type="password" id="login-password" className="focus:outline-0" placeholder="Input your password"/>
            <button className=" bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100	rounded-md ml-3	hover:bg-blue-600">Login</button>
        </form>
        <a href="	" className="text-rose-900 font-bold underline	bg-color-red block items-center mt-6 text-center" onClick = {handleClick}>Register</a>
    </main>
}
