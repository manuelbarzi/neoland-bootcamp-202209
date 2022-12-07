import log from '../utils/coolog'
import Button from './Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useContext } from 'react'
import { errors } from 'com'
import authenticateUser from '../logic/authenticateUser'
import Context from '../components/Context'
const { FormatError, AuthError, LengthError, NotFoundError } = errors

function LoginForm({ onCreated, onClose }) {
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

    return <div className='bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden' onClick={onClose}>
        <div className='p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white' onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size='1.5rem' onClick={onClose} className='cursor-pointer' />
            <form className='flex flex-col justify-start m-4 gap-2 border-2 border-slate-600 rounded-xl p-6' onSubmit={handleLogin}>
            
            <label htmlFor='email' className='container__item--left'>E-mail</label>
            <input name='email' type='email' id='email' placeholder=' input your e-mail' className='border-b border-black text-black rounded-xl' />
            
            <label htmlFor='password' className='container__item--left'>Password</label>
            
            <input name='password' type='password' id='password' placeholder=' input your password' className='border-b border-black text-black rounded-xl' />
            <Button>Login</Button>
        </form>
        </div>
    </div>
}
export default LoginForm