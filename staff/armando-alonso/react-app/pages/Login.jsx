function Login(props) {

    const handleClick = event => {
        event.preventDefault()

        props.onRegisterClick()
        
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

            props.onLoggedIn()

        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }

    }

    return <main className="h-screen flex flex-col items-center justify-center bg-[#fffde7]">
        <form className="flex flex-col gap-y-2 rounded-xl shadow-2xl bg-[#cccab5] p-8" onSubmit={handleSubmit}>
            <h2 className="flex justify-center text-[#ffffff] text-xl mb-3">Login</h2>
            <label htmlFor="Email-login" className="">Email</label>
            <input name="email" type="email" id="email-login" placeholder="Email"/>
            <label htmlFor="pasword-login" className="">Password</label>
            <input name="password" type="password" id="password-login" placeholder="Password"/>
            <button className="flex text-[#ffffff] justify-center">Login</button>
        </form>
        <a href="" className="" onClick={handleClick}>Register</a>
    </main>
}