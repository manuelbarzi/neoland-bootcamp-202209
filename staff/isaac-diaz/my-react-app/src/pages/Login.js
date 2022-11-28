import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'

export default function Login({ onLoggedIn }) {
    log.info('Login -> render')

    // const navigate = useNavigate()

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

                sessionStorage.userId = userId

                // Navigate
                onLoggedIn()
            })

        } catch (error) {
            alert(error.message)


            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <main className="flex items-center justify-center h-screen bg-gray-100  ">
        <form onSubmit={handleLogin}>
            <div className='bg-pink-400 w-96 p-6 rounded shadow-sm'>
            <div className='flex items-center justify-center mb-4'>
                <img src='logo.png' className='h32' />
            </div>
            {/* <div className='flex flex-col items-center justify-center w-96 bg-pink-400'> */}
                <label htmlFor="login-email" className="container__item--left">E-mail</label>
                <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black" />
                <label htmlFor="password" className="container__item--left">Password</label>
                <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black" />
                <button className="p-2 bg-white border rounded-xl hover:animate-spin">Login</button>
            {/* </div> */}
            </div>
        </form>


        <Link to="/register" className="underline">Register</Link>

    </main>
}
