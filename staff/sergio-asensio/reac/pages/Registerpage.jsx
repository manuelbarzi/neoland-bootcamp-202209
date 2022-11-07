function RegisterPage(props) {
    log('INFO', 'RegisterPage -> render')

    const handleClick = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

    return <main className="flex flex-col p-3 border-4 border-sky-500 bg-sky-200">
        <form className="flex flex-col gap-2">
            <label htmlFor="register-name" className="container__item--left">Name</label>
            <input type="name" id="register-name" placeholder="input your name" pattern="[a-zA-Z]{1,}" required="" className="pl-2"/>
            <label htmlFor="register-email" className="container__item--left">E-mail</label>
            <input type="email" id="register-email" placeholder="input your e-mail" required="" className="pl-2"/>
            <label htmlFor="register-password" className="container__item--left">Password</label>
            <input type="password" id="register-password" placeholder="input your password" pattern="[A-Za-z0-9S]{8,}" required="" title="Use min 8 characters for the password and no spaces" className="pl-2" />
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </form>
        <a href="" className="underline w-fit place-self-end" onClick={handleClick}>Login</a>
    </main>
}
