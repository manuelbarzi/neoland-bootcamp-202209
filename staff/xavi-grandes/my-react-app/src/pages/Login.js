import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    log.info('Login -> render')

    const navigate = useNavigate()

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
                
                navigate('/')
            })
        } catch (error) {
            alert(error.message)

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <main className="h-full flex flex-col items-center justify-center gap-2">
        <div className='bg-white p-4 border border-black rounded-lg'>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="password" className="container__item--left">Password</label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black" />
            <button className="p-1 border rounded-xl bg-red-500">Login</button>
        </form>

        <Link to="/register" className="underline">Register</Link>
        </div>
    </main>
}

export default Login