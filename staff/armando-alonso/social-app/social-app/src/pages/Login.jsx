import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'

function Login() {
    log.info('Login -> render')

    const { login } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(userId => login(userId))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)

            event.target.password.value = ''
        }
    }

    return  <main className="h-full flex flex-col items-center justify-center gap-2">
                <form className="flex flex-col gap-2" onSubmit={handleLogin}>
                    <label htmlFor="email" className="container__item--left">E-mail</label>
                    <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black" />
                    <label htmlFor="password" className="container__item--left">Password</label>
                    <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black" />
                    <button className="p-2 border rounded-xl">Login</button>
                </form>

                <Link to="/register" className="underline">Register</Link>
            </main>
    }

export default Login