/* eslint-disable jsx-a11y/anchor-is-valid */
import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'

function Login({ onNavigateToRegister, onLogin }) {
    log.info('Login -> render')

    const handleNavigateToRegister = event => {
        log.info('Login -> handleNavigateToRegister')

        event.preventDefault()

        onNavigateToRegister()
    }

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

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

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <main className="flex flex-col items-center gap-2">
        <h2>hola login</h2>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="password" className="container__item--left">Password</label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Login</button>
        </form>

        <a href="" className="underline bg-red-600" onClick={handleNavigateToRegister}>Register</a>
    </main>
}

export default Login