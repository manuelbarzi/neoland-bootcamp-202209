import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import Alert from '../components/Alert'
import { useState } from 'react'

function Login() {
    log.info('Login -> render')

    const [message, setMessage] = useState()

    const { login } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(token => login(token))
                .catch(error => setMessage(error.message))
        } catch (error) {
            alert(error.message)

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    const handleCloseAlert = () => setMessage()

    return <main className="h-full flex flex-col items-center justify-center gap-2 bg-white dark:bg-black text-black dark:text-white">
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black text-black" />
            <label htmlFor="password" className="container__item--left">Password</label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black text-black" />
            <button className="p-2 border rounded-xl hover:animate-spin">Login</button>
        </form>

        <Link to="/register" className="underline">Register</Link>

        {message && <Alert message={message} onClose={handleCloseAlert} />}
    </main>
}

export default Login