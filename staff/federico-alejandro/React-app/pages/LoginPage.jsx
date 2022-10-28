function LoginPage(props) {
    log('INFO', 'LoginPage -> render')

    const handleClick = event => { // maneja el callback del evento que te envia a register
        event.preventDefault() //los links intentan navegar y por esta accion se recibe un event, para evitar que recargue pagina 
                               // o  se intente navegar a algun lugar

        const onRegisterClick = props.onRegisterClick 
//lo referencio y llamo a la callback(funcion que nos dirige a la register)
        onRegisterClick()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target // indica sobre que elementos quiero recoger la info

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
    return <main className="flex flex-col  items-center gap-2">
        <div className=" flex flex-col items-center  gap-6 border-5 border-stone-900 h-96 ">
            <h1 className="text-3xl font-extrabold italic">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-60 p-7 bg-indigo-600 rounded-lg h-80 shadow-2xl shadow-gray-900">
                <label htmlFor="email" className="font-bold text-white italic">E-mail</label>
                <input type="email" name="email" id="email" placeholder=" input your email" className=" bg-slate-300 border-b border-black w-50 rounded-md" />
                <label htmlFor="password" className="font-bold text-white italic">Password</label>
                <input name="password" type="password" id="password" placeholder=" input you password" className=" bg-slate-300 border-b border-black rounded-md " />
                <button className="mx-14 font-bold italic  rounded-md bg-slate-300 p-2">Login</button>
                <hr className="w-full border-2 bg-white"/>
                <a href="" onClick={handleClick} className="animate-pulse underline font-bold text-white text-lg italic self-center p-2 content-end">Register</a>
            </form>
            
        </div>

    </main>
}
