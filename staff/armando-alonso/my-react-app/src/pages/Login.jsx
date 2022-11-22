import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'

function Login( { onNavigateToRegister, onLogin }) {
    log.info('Login -> render')

    const handleNavigateToRegister = event => {
        log.info('Login -> handleNavigateToRegister')

        event.preventDefault()

        onNavigateToRegister()
    }

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: {value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    alert(error.message)

                    return
                }

                window.userId = userId
                onLogin()
            })
        } catch (error) {
            alert(error.message)

            event.target.passwordInput.value = ''
        }
    }

    return <main className="flex flex-col items-center gap-2">
        <h2>Hola Login</h2>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="login-email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="login-email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="login-password" className="container__item--left">Password</label>
            <input name="password" type="password" id="login-password" placeholder="input your password" className="border-b border-black" />
            <button clasName="p-2 border rounded-xl">Login</button>
        </form>

        <a href="" className="underline" onClick={handleNavigateToRegister}>Register</a>
    </main>
}

export default Login