function RegisterPage(props) {
    log('INFO', 'RegisterPage', 'pages/RegisterPage.jsx')

    const handleClick = event => {
        log('DEBUG', 'go to login', 'pages/RegisterPage.jsx')
        event.preventDefault()

        const onLoginClick = props.onLoginClick

        onLoginClick()
    }

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target

        const registerNickName = form.registerNickName
        const emailInput = form.registerEmail
        const passwordInput = form.registerPassword
        const validatePassword = form.registerValidate

        const name = registerNickName.value
        const email = emailInput.value
        const password = passwordInput.value
        const validate = validatePassword.value

        if(password === validate){
            registerUser(name, email, password)
        }else{
            alert('paswords not equals')
        }
    }

    return <main className="">
        <form className="" onSubmit={handleRegister}>
            <label htmlFor="register-name" className="container__item--left">Nick Name</label>
            <input name="registerNickName" type="name" id="register-name" placeholder="input your name" className="border-b border-black" />
            <label htmlFor="register-email-form" className="container__item--left">E-mail</label>
            <input name="registerEmail" type="email" id="register-email" placeholder="input your email" className="border-b border-black" />
            <label htmlFor="register-password-form" className="container__item--left">Password</label>
            <input name="registerPassword" type="password" id="register-password" placeholder="input your password" className="border-b border-black" />
            <label htmlFor="validate-password-form" className="container__item--left">Password</label>
            <input name="registerValidate" type="password" id="validate-password" placeholder="validate your password" className="border-b border-black" />
            <button className="">Register</button>
        </form>
        <a href="" className="underline" onClick={handleClick}>Login</a>
    </main>
}