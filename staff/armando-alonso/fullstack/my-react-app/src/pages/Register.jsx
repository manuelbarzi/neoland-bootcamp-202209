import log from '../utils/coolog.js'
import registerUser from '../logic/registerUser.js'


function Register( { onNavigateToLogin }) {
    log.info('Register -> render')

    const handleNavigateToLogin = event => {
        log.info('Login -> handleNavigateToLogin')

        event.preventDefault()

        onNavigateToLogin()
    }

    const handleRegister = event => {
        log.info('Login -> handleNavigateToLogin')

        event.preventDefault()

        const { name: {value: name }, email: { value: email}, password: { value: password } } = event.target

        try {
            registerUser(name, email, password, (error, userId) => {
                if (error) {
                    alert(error.message)

                    return
                }

                window.userId = userId
                onNavigateToLogin()
            })
        } catch (error) {
            alert(error.message)

            event.target.passwordInput.value = ''
            
        }
    }

    return <main className="h-full flex flex-col items-center justify-center gap-2">
        <h2>Hola Register</h2>
        <form className="flex flex-col gap-2" onSubmit={handleRegister}>
            <label htmlFor="name" className="container__item--left">Name</label>
            <input name="name" type="text" id="name" placeholder="input your name" className="border-b border-black" />
            <label htmlFor="email" className="container__item--left">E-mail</label>
            <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black" />
            <label htmlFor="password" className="container__item--left">Password</label>
            <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black" />
            <button clasName="p-2 border rounded-xl">Register</button>
        </form>

        <a href="#" className="underline" onClick={handleNavigateToLogin}>Login</a>
           </main>
}

export default Register