import { Link, useNavigate } from 'react-router-dom'
import registerUser from '../logic/registerUser'
import log from '../utils/coolog'
import 'tw-elements'

function Registro () {
    log.info('Registro -> render')

    const navigate = useNavigate()

    const handleRegister = event => {
        log.info('Register -> handleRegister')

        event.preventDefault()

        const { name: { value: name }, surname: { value: surname }, direction: { value: direction }, postal: { value: postal }, barrio: { value: barrio }, email: { value: email }, password: { value: password } } = event.target

        try {
            registerUser(name, surname, direction, postal, barrio, email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                navigate('/login')
            })
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
                <form onSubmit={handleRegister}>
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                        <p className="text-center font-semibold mx-4 mb-0">Registro</p>
                    </div>
                    {/* <!-- Name input --> */}
                    <div className="mb-6">
                        <label htmlFor='name'></label>
                        <input id="name" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nombre" />
                    </div>
                    {/* <!-- Surname input --> */}
                    <div className="mb-6">
                        <label htmlFor='surname'></label>
                        <input id="surname" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Apellido" />
                    </div>
                    {/* <!-- Direction input --> */}
                    <div className="mb-6">
                        <label htmlFor='direction'></label>
                        <input id="direction" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Direccion" />
                    </div>
                    {/* <!-- Postal Code input --> */}
                    <div className="mb-6">
                        <label htmlFor='postal'></label>
                        <input id="postal" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Codigo Postal" />
                    </div>
                    {/* <!-- Barrio input --> */}
                    <div className="mb-6">
                        <label htmlFor='barrio'></label>
                        <input id="barrio" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Barrio" />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label htmlFor='email'></label>
                        <input id="email" type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="mb-6">
                        <label htmlFor='password'></label>
                        <input id="password" type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                    </div>
                    <div className="text-center lg:text-left">
                        <button className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Registro</button>
                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        ¿Tienes cuenta?
                        <Link to="/login" className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"> Haz Login</Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </main>
    )
}

export default Registro