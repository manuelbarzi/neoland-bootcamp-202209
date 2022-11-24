import log from '../utils/coolog'
import authenticateUser from '../logic/authenticateUser'
import ButtonLogReg from '../components/ButtonLogReg'

function Login({ onNavigateToRegister, onLogin }) {
    log.info('Login -> render')

    const handleNavigateToRegister = event => {
        log.info('Login -> handleNavigateToRegister')

        event.preventDefault()

        onNavigateToRegister()
    }

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
                onLogin()
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
        <h2 className="mb-6"> LET'S FIGHT </h2>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <label htmlFor="email" className=""></label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-t border-black" />
            <label htmlFor="password" className="container__item--left"></label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-t border-black" />
            <ButtonLogReg className="mt-8">LOGIN</ButtonLogReg>
        </form>
        </div>
        <a href="" className="p-8 text-1xl text-blue-600 underline" onClick={handleNavigateToRegister}>REGISTER</a>
        </div>
    </main>
}

export default Login