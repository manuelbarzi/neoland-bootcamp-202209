function Register(props) {

    const handleNavigateToLogin = event => {

        event.preventDefault()

        props.onNavigateToLogin()

    }

    const handleToHome = event => {

        event.preventDefault()
    }




    return <>
        <h1>Register</h1>
        <main className="flex flex-col items-center gap-2">
            <form className="flex flex-col gap-2">
                <label>Name</label>
                <input placeholder="input your name"></input>
                <label htmlFor="login-email" className="container__item--left">E-mail</label>
                <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="border-b border-black" />
                <label htmlFor="login-password" className="container__item--left">Password</label>
                <input name="password" type="password" id="login-password" placeholder="input your password" className="border-b border-black" />
                <button className="p-2 border rounded-xl hover:animate-spin" onClick={handleToHome}>Register</button>
            </form>

            <a href="" className="underline" onClick={handleNavigateToLogin}>Login</a>
        </main>
    </>
}

export default Register