function RegisterPage(props) {
    log('INFO', 'RegisterPage -> render')

    const handleClick = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

       const handleSubmit = event => {
        event.preventDefault()
             

        const form = event.target

        const nameInput =form.name
        const emailInput = form.email
        const passwordInput = form.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password)
    
            alert('user registered')
            
            const onRegisterUser = props.onRegisterUser
            onRegisterUser()

        } catch (error) {
            alert(error.message)
    
            passwordInput.value = ''
        }
    }
    






    return <main className="h-screen flex flex-col justify-center items-center">
        <form className="grid gap-4 grid-cols-4 grid-rows-4 " onSubmit={handleSubmit}>
            <label htmlFor="register-name" className="text-center font-bold text-cyan-900">Name</label>
            <input name = "name" type="name" id="register-name" className="focus:outline-0" placeholder="Input your name" required="" />
            <label htmlFor="register-email" className="text-center font-bold text-cyan-900">E-mail</label>
            <input name='email' type="email" id="register-email" placeholder="Input your e-mail" className="focus:outline-0" required="" />
            <label htmlFor="register-password" className="font-bold text-cyan-900 text-center col-star-2 col-end-3">Password</label>
            <input name= 'password' type="password" id="register-password" className="focus:outline-0" placeholder="Input your password" pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces" />
            <button className="row-start-3 row-end-4 col-start-2 col-end-4 bg-cyan-400 hover:bg-cyan-00 py-1 px-4 font-bold text-gray-100 rounded-md ml-3 hover:bg-blue-600">Register</button>
        </form>
        <a href="" className="  text-rose-900 font-bold underline bg-color-red block items-center mt-6 text-center" onClick={handleClick}>Login</a>
    </main>



}