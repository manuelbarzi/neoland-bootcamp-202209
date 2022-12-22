import log from '../utils/coolog'
import registerUser from '../logic/registerUser'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    log.info('Register -> render')

    const navigate = useNavigate()

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password } } =event.target

        try {
            registerUser(name, email, password)
                .then(() => navigate('/login'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)

            event.target.password.value = ''
        }
    }


    return  <main className='h-full flex flex-col items-center justify-center gap-2'>
                <form className='flex flex-col gap-2' onSubmit={handleRegister}>
                    <label htmlFor='name' className='container__item--left'>Name</label>
                    <input name='name' type='text' id='name' placeholder='Input your Name' className='border-b border-black' />
                    <label htmlFor='email' className='container__item--left'>Email</label>
                    <input name='email' type='email' id='email' placeholder='=Input your email' className='border-b border-black' />
                    <label htmlFor='password' className='container__item--left'>Password</label>
                    <input name='password' type='password' id='password' placeholder='Input your password' className='border-b border-black' />
                    <button className='p-2 border rounded-x1'>Register</button>
                </form>

                <Link to='/login' className='underline'>Login</Link>
            </main>
}

export default Register