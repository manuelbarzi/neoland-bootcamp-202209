function RegisterPage(props) {
    const handleKey = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

    const onRegisterUser = event =>{
       
        event.preventDefault()

        const form = event.target

        const name= form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
           registerUser(name, email, password)

           alert('user correctly registered')
        
            const onRegister = props.onRegister
            onRegister()
        } catch (error) {
            alert(error.message)
    
            form.password.value = ''
        }

       
    }

    return <div className="flex h-full justify-center items-center bg-rose-700">
        <form onSubmit={onRegisterUser} className="w-1/4 shadow-xl bg-orange-500 flex flex-col gap-2 justify-center items-center p-8 border-solid border-black border-2 rounded-lg">
            <h2 className='text-2xl font-bold'>Register</h2>
            <label htmlFor="name" className="self-start">Name</label>
            <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="text" placeholder="Input your Name" name="name" id="register-name" />
            <label htmlFor="email" className="self-start">E-mail</label>
            <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="email" placeholder="Input your E-mail" name="email" id="register-email" />
            <label htmlFor="password" className="self-start">Password</label>
            <input className="p-1 w-full border-solid border-black border-2 rounded-lg bg-orange-200" type="password" placeholder="Input you password" name="password" id="register-password" />
            <button className="p-1 border-solid border-black border-2 rounded-lg mt-3.5 w-full bg-orange-200">Register</button>
            <hr className="w-full border-black mt-3.5" />
            <div className="div-register mt-2">
                <p>Already have an account?</p>
                <a href="" onClick={handleKey} className="p-1 border-solid border-black border-2 block text-center rounded-lg rounded-lg mt-3.5 w-full bg-orange-200">Login</a>
            </div>
        </form>
    </div>
}       