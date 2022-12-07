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

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }

    return <main className='h-full flex flex-col items-center bg-slate-500'>
        <section className='bg-slate-200 h-full w-full'>
            <h2 className='font-bold flex self-end justify-center'>Logo</h2>
        </section>
        <section className='bg-cyan-300 h-full w-full p-8'>
            <h2 className='font-bold'>reciclar</h2>
            <h3>Info sobre pilas, aceite, aerosoles, que deben ir en los puntos verdes</h3>
            <ul className='flex flex-col items-end justify-end'>
                <li>foto</li>
                <li>foto</li>
                <li>foto</li>
                <li>foto</li>
            </ul>
            <button className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>INFO</button>
        </section>
        <form className='flex flex-col justify-start m-4 gap-2 border-2 border-slate-600 rounded-xl p-6' onSubmit={handleLogin}>
            <label htmlFor='email' className='container__item--left'>E-mail</label>
            <input name='email' type='email' id='email' placeholder=' input your e-mail' className='border-b border-black text-black rounded-xl' />
            <label htmlFor='password' className='container__item--left'>Password</label>
            <input name='password' type='password' id='password' placeholder=' input your password' className='border-b border-black text-black rounded-xl' />
            <button className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>Login</button>
        </form>
            <Link to='/register' className='bg-green-400 gap-2  font-bold text-white border-2 p-2 border-green-400 rounded-xl underline'>Register</Link>
        <section className='bg-slate-200 h-full w-full'>

        </section>



    </main>
}

export default Login