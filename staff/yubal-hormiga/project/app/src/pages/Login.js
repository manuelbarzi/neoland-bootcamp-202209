import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Login() {
    log.info('Login -> render')

    const { login, showAlert } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            authenticateUser(email, password)
                .then(token => login(token))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof AuthError || error instanceof NotFoundError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                showAlert(error.message, 'warn')
            else
                showAlert(error.message, 'fatal')

            event.target.password.value = ''
        }
    }

    return <main className="h-full flex flex-col items-center justify-center gap-2 bg-green-100 ">
        <div className='bg-white p-5 rounded-lg'>
            <form className="flex flex-col gap-4 mb-4" onSubmit={handleLogin}>
                <label htmlFor="email" className="font-medium container__item--left">E-mail</label>
                <input name="email" type="email" id="email" placeholder="Introduce tu e-mail" className="border-b border-black text-black" />
                <label htmlFor="password" className="font-medium container__item--left">Password</label>
                <input name="password" type="password" id="password" placeholder="Introduce tu contraseña" className="border-b border-black text-black" />
                <button className="font-medium py-3 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md">Entrar</button>
            </form>
            <div className=' tex-center  text-center gap-3'>
                <Link to="/register" className="font-medium p-3 rounded-md  text-white   bg-gray-700   hover:bg-green-600">Regístrate</Link>
            </div>
        </div>
    </main>
}

export default Login