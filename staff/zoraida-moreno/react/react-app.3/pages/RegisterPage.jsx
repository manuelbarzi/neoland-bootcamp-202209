function RegisterPage(props) {
    log('INFO', 'RegisterPage -> render')

    const handleNavigateToLogin = event => {
        event.preventDefault()

        const onNavigateToLogin = props.onNavigateToLogin

        onNavigateToLogin()
    }


    return <main className="flex flex-col items-center gap-2">
        <form className="flex flex-col gap-2">
            <label htmlFor="register-name" className="container__item--left">Name</label>
            <input type="name" name="name" id="register-name" placeholder="input your name" className="border-b border-black" />
            <label htmlFor="register-email" className="container__item--left">E-mail</label>
            <input type="email" name="email" id="register-email" placeholder="input your email" className="border-b border-black" />
            <label htmlFor="register-password" className="container__item--left">Password</label>
            <input type="password" name="password" id="register-password" placeholder="input your password" className="border-b border-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Register</button>
        </form>
        <a href="" className="underline" onClick={handleNavigateToLogin}>Login</a>
    </main>
}