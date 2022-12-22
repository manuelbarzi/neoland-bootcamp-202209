import log from '../utils/coolog'
import ButtonLogReg from '../components/ButtonLogReg'
import registerUser from '../logic/registerUser'

function Register({ onNavigateToLogin, onRegister }) {
    log.info('Register -> render')

    const handleNavigateToLogin = event => {
        log.info('Register -> handleNavigateToLogin')

        event.preventDefault()

        onNavigateToLogin()
    }

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, email: { value: email }, password: { value: password } } = event.target

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onRegister()
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
    <h2 className="mb-6"> WANT TO FIGHT? </h2>
    <form className="flex flex-col gap-2" onSubmit={handleRegister}>
        <label htmlFor="name" className="container__item--left"></label>
        <input name="name" type="text" id="name" placeholder="input your nickName" className="border-b border-t border-black" />
        <label htmlFor="email" className=""></label>
        <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-t border-black" />
        <label htmlFor="password" className="container__item--left"></label>
        <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-t border-black" />
        <label htmlFor="repeatPassword" className="container__item--left"></label>
        <input name="repeatPassword" type="password" id="repeatPassword" placeholder="repeat your password" className="border-b border-t border-black" />
        <ButtonLogReg className="mt-8">REGISTER</ButtonLogReg>
    </form>
    </div>
    <a href="" className="p-8 text-1xl text-blue-600 underline" onClick={handleNavigateToLogin}>LOGIN</a>
    </div>
</main>
}

export default Register