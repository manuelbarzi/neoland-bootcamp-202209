import { Link } from 'react-router-dom'
import log from '../utils/coolog'
import validateUser from '../logic/validateUser'
import { useContext } from 'react'
import Context from '../components/Context'
import 'tw-elements'

function Login() {
    log.info('Login -> render')

    const { login } = useContext(Context)

    const handleLogin = event => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            validateUser(email, password)
                .then(userId => login(userId))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)

            event.target.password.value = ''
        }
}


    return (

    <main className="h-screen">
        {/* <div className="px-6 h-full text-gray-800 bg-cover bg-[url('https://serranillosdelvalle.es/portal/wp-content/uploads/2018/03/IMG_4617.jpg')]"> */}
        <div className="px-6 h-full text-gray-800 bg-gradient-to-r from-[#3E5064] to-[#ECF0F5]">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 ">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 bg-white rounded-lg p-8">
                <form onSubmit={handleLogin}>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                        <p className="text-center font-semibold mx-4 mb-0">Login</p>
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label htmlFor="email"></label>
                        <input name="email" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email address" />
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="mb-6">
                        <label htmlFor="password"></label>
                        <input name="password" type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-end items-center mb-6">
                        <a href="#!" className="text-gray-800">Olvidaste tu contraseña?</a>
                    </div>
                    <div className="text-center lg:text-left">
                        <button className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Login</button>
                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        ¿No tienes cuenta? 
                        <Link to="/register" className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Registrate</Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </main>
    )
    
}

export default Login