import log from '../utils/coolog'
import ButtonLogReg from '../components/ButtonLogReg'
import registerUser from '../logic/registerUser'
import { Link, /*useNavigate*/ } from 'react-router-dom'

function Register({ onNavigateToLogin }) {
    log.info('Register -> render')

    const handleNavigateToLogin = () => {
        log.info('Register -> handleNavigateToLogin')

        onNavigateToLogin()
    }

    const handleRegister = event => {
        debugger
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password }, repeatPassword: { value: repeatPassword }, } = event.target

        try {
            registerUser(name, email, password, repeatPassword, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                handleNavigateToLogin()
            })
        } catch (error) {
            alert(error.message)

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }


    return <main className="h-screen w-screen flex content-center items-center bg-black">
    <div className='w-full flex flex-col items-center'>
    <h2 className="p-8 text-2xl text-white">ALIENIZE</h2>
    <div className="flex flex-col items-center border-black border-2 p-12 bg-white">
    <h2 className="mb-6 text-black"> WANT TO FIGHT? </h2>
    <form className="flex flex-col gap-2" onSubmit={handleRegister}>
        <label htmlFor="name" className="container__item--left"></label>
        <input name="name" type="text" id="name" placeholder="input your nickName" className="border-b border-t border-black" />
        <label htmlFor="email" className=""></label>
        <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-t border-black" />
        <label htmlFor="password" className="container__item--left"></label>
        <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-t border-black text-black" />
        <label htmlFor="repeatPassword" className="container__item--left"></label>
        <input name="repeatPassword" type="password" id="repeatPassword" placeholder="repeat your password" className="border-b border-t border-black text-black" />
        <ButtonLogReg className="mt-8">REGISTER</ButtonLogReg>
    </form>
    </div>
    <Link to="/login" className="p-8 text-1xl text-blue-600 underline">LOGIN</Link>
    </div>
</main>
}

export default Register