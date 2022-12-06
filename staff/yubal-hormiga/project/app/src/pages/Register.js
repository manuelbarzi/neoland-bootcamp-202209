import log from '../utils/coolog'
import registerUser from '../logic/registerUser'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
const { FormatError, LengthError, ConflictError } = errors

function Register() {
    log.info('Register -> render')

    const navigate = useNavigate()
    const { showAlert } = useContext(Context)

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target

        try {
            registerUser(name, email, password)
                .then(() => navigate('/login'))
                .catch(error => {
                    if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
                        showAlert(error.message, 'warn')
                    else if (error instanceof ConflictError)
                        showAlert(error.message, 'error')
                    else
                        showAlert(error.message, 'fatal')
                })
        } catch (error) {
            showAlert(error.message, 'warn')

            event.target.password.value = ''
        }
    }

    return <main className="h-full flex flex-col items-center justify-center gap-2 bg-green-100">
        <div className='bg-white p-5 rounded-lg'>
        <form className="flex flex-col gap-2 mb-4" onSubmit={handleRegister}>
            <label htmlFor="name" className="font-medium container__item--left">Nombre</label>
            <input name="name" type="text" id="name" placeholder="input your name" className="border-b border-black text-black" />
            <label htmlFor="email" className="font-medium container__item--left">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black text-black" />
            <label htmlFor="password" className="font-medium container__item--left">Contraseña</label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black text-black" />
            <button className="font-medium py-3 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md">Regístrate</button>
        </form>
         <div className='tex-center  text-center gap-3 '>
        <Link to="/login" className="font-medium p-3 rounded-md  text-white   bg-gray-700   hover:bg-green-600">Login</Link>
         </div>

        </div>
    </main>
}

export default Register