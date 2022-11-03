function Register(props) {
    log.info('RegisterPage -> render')

    const handleClick = event => {
        event.preventDefault()
        //cuando se haga click, se crea el evento
        const onNavigateToLogin = props.onNavigateToLogin

        onNavigateToLogin()
    } 

    const handleSubmit = event => {
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

            //const onLoginClick = props.onLoginClick

            alert('user registered')

            const onRegisterUser = props.onRegisterUser

            onRegisterUser()

        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }

    }

    return <main className="flex flex-col gap-6 w-60 mt-44 bg-indigo-600 rounded-lg h-80 shadow-2xl shadow-gray-900">
        <form onSubmit={handleSubmit} className="flex flex-col items-center py-1 gap-4 border-5 border-stone-900 h-96">
            <label htmlFor="name" className="font-bold text-white italic">Name</label>
            <input className=" bg-slate-300 border-b border-black rounded-md" type="name" name="name" id="name" placeholder=" Input your name" pattern="[A-Za-z]{1,}" />
            <label htmlFor="email" className="font-bold text-white italic justify-start">E-mail</label>
            <input type="email" name="email" id="email" placeholder=" Input your email" required="" className="bg-slate-300 border-b border-black rounded-md" />
            <label className="font-bold text-white italic" htmlFor="Password">Password</label>
            <input type="password" name="password" id="password" placeholder=" Input your password" className="bg-slate-300 border-b border-black rounded-md" pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces" />
            <button className="font-bold underline text-white italic">Register</button>
            <a href="" onClick={handleClick} className="login--link font-bold text-white italic animate-bounce">login</a>
        </form>
    </main>
}