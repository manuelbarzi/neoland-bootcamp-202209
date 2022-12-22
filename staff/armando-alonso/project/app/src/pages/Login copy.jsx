import { useContext } from 'react'
import validateUser from '../logic/validateUser'
import { Link, useNavigate } from 'react-router-dom'
import log from '../utils/coolog'
import 'tw-elements'
import UserContext from '../components/Context'

function Login() {
    log.info('Login -> render')

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        log.info('Login -> handleLogin')

        event.preventDefault()

        const { email: { value: email }, password: { value: password } } = event.target

        try {
            const validate = await validateUser(email, password)
                
            setUser({
                name: validate.name,
                email: validate.email
            })
                
            navigate('/')
            
        } catch (error) {
            alert(error.message)

            event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
        }
    }


    return (

    <main className="h-screen">
        <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://img.freepik.com/premium-vector/vintage-mailbox-postal-letterbox-vector-illustration_444196-3284.jpg?w=2000" className="w-full w-5/6" alt="Sample" />
                </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
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