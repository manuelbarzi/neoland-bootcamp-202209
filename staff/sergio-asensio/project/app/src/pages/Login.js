import log from '../utils/coolog'
import Loginate from '../components/Loginate'
import Registarte from '../components/Registarte'


import { useEffect, useState } from 'react'
import authenticateUser from '../logic/authenticateUser'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../components/Context'
import { errors } from 'com'
import logo from '../img/logo.jpg'
const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Login() {
    log.info('Login -> render')
    // useEffect(() => {
    //     console.log('hola')
    // },[1000])


    const [panelLogin, setPanelLogin] = useState(false)
    const [panelRegister, setPanelRegister] = useState(false)


    const toLogin = () => {
        if (panelLogin === false){
        setPanelLogin(true)
        } else {
            setPanelLogin(false)
        }
    }

    const toRegister = () => {
        if (panelRegister === false) {
            setPanelRegister(true)
        } else {
             setPanelRegister(false)
        }
    }
    const closeLoginPanel = () => {
        setPanelLogin(false)
    }

    const closeRegisterPanel = () => {
        setPanelRegister(false)
    }

    return <main className="h-full">
        <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
            <div className='h-20 w-20 '>
                <img src={logo}/>
            </div>
            <div>
                <h1>Trepadores Cavernicolas</h1>
            </div>
            <div>
                <button onClick={toLogin} className="p-2 m-2 border rounded-xl">Login</button>
                <button onClick={toRegister}className="p-2 border rounded-xl">Register</button>
            </div>
        </header>
        <div className='h-5/6 flex flex-col items-center justify-center'>
            { panelLogin === true && <Loginate onClose={closeLoginPanel}/> }
            { panelRegister === true && <Registarte onClose={closeRegisterPanel}/> }

            <div className='border-4 border-solid rounded-2xl overflow-hidden w-2/3 h-2/3'>
                <img className='w-full h-full' src='https://lafurgoverde.files.wordpress.com/2017/12/11172124-5801-4199-afd6-20b93186a0c3.jpeg?w=2000'/> 
            </div>
            <p>Actividades</p>
        </div>

    </main>
}

export default Login

//                  PONER IMAGEN CON INFORMACION DEBAJO
// {/* <figure>
// <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
// </figure> */}


// --------------------------------------------------------LOGIN-----------------------------------
// import log from '../utils/coolog'
// import authenticateUser from '../logic/authenticateUser'
// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import Context from '../components/Context'
// import { errors } from 'com'
// const { FormatError, AuthError, LengthError, NotFoundError } = errors


// function Login() {
//     log.info('Login -> render')

//     const { login, showAlert } = useContext(Context)

//     const handleLogin = event => {
//         log.info('Login -> handleLogin')

//         event.preventDefault()

//         const { email: { value: email }, password: { value: password } } = event.target

//         try {
//             authenticateUser(email, password)
//                 .then(token => login(token))
//                 .catch(error => {
//                     if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
//                         showAlert(error.message, 'warn')
//                     else if (error instanceof AuthError || error instanceof NotFoundError)
//                         showAlert(error.message, 'error')
//                     else
//                         showAlert(error.message, 'fatal')
//                 })
//         } catch (error) {
//             if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
//                 showAlert(error.message, 'warn')
//             else
//                 showAlert(error.message, 'fatal')

//             event.target.password.value = '' // TODO improve this, do not manipulate the dom directly, do it by means of React
//         }
//     }

//     return <main className="h-full flex flex-col items-center justify-center gap-2 bg-white dark:bg-black text-black dark:text-white">
//         <form className="flex flex-col gap-2" onSubmit={handleLogin}>
//             <label htmlFor="email" className="container__item--left">E-mail</label>
//             <input name="email" type="email" id="email" placeholder="input your e-mail" className="border-b border-black text-black" />
//             <label htmlFor="password" className="container__item--left">Password</label>
//             <input name="password" type="password" id="password" placeholder="input your password" className="border-b border-black text-black" />
//             <button className="p-2 border rounded-xl">Login</button>
//         </form>

//         <Link to="/register" className="underline">Register</Link>
//     </main>
// }

// export default Login