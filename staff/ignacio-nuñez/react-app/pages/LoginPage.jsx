function LoginPage(props) {
    const handleClick = event => {
        event.preventDefault()

        const onRegisterClick = props.onRegisterClick

        onRegisterClick()
    }

    const handleSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value
    
        try {
            user =  authenticateUser(email, password)
        
            const onLoggedIn = props.onLoggedIn
            
            onLoggedIn()
        } catch (error) {
            alert(error.message)
    
            form.password.value = ''
        }
    }

    return <div className="flex h-full justify-center items-center bg-rose-700">
        <form onSubmit= {handleSubmit} className="w-1/5 shadow-xl bg-orange-500 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
            <h2 className='text-2xl font-bold'>Log in</h2>
            <label htmlFor="email" className="self-start">E-mail</label>
            <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="email" placeholder="Input your E-mail" name="email" id="login-email" />
            <label htmlFor="password" className="self-start">Password</label>
            <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="password" id="login-password" />
            <button className="p-1 border-solid border-black border-2 rounded-lg mt-3.5 w-full bg-orange-200">Log in</button>
            <hr className= "w-full border-black mt-3.5"/>
            <div className="div-register mt-2">
                <p>Didnt have an account?</p>
                <a href="" onClick ={handleClick} className="p-1 border-solid border-black border-2 block text-center rounded-lg rounded-lg mt-3.5 w-full bg-orange-200">Register</a>
            </div>
        </form>
    </div>
}       