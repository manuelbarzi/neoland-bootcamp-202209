function RegisterPage(props) {
    log('INFO', 'RegisterPage', 'pages/RegisterPage.jsx')

    const handleClick = event => {
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

    return <main className="">
        <form className="">
            <label htmlFor="register-name" className="container__item--left">Name</label>
            <input type="name" id="register-name" placeholder="input your name" className="border-b border-black" />
            <label htmlFor="register-email" className="container__item--left">E-mail</label>
            <input type="email" id="register-email" placeholder="input your email" className="border-b border-black" />
            <label htmlFor="register-password" className="container__item--left">Password</label>
            <input type="password" id="register-password" placeholder="input your password" className="border-b border-black" />
            <button className="">Register</button>
        </form>
        <a href="" className="underline" onClick={handleClick}>Login</a>
    </main>
}