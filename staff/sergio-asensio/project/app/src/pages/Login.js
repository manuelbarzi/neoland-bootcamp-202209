import log from '../utils/coolog'
import Loginate from '../components/Loginate'
import Registarte from '../components/Registarte'
import { useState } from 'react'
import { errors } from 'com'
import logo from '../img/logo.jpg'
const { FormatError, AuthError, LengthError, NotFoundError } = errors


function Login() {
    log.info('Login -> render')

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
            { panelLogin && <Loginate onClose={closeLoginPanel}/> }
            { panelRegister && <Registarte onClose={closeRegisterPanel}/> }

            <div className='border-4 border-solid rounded-2xl overflow-hidden w-2/3 h-2/3'>
                <img className='w-full h-full' src='https://lafurgoverde.files.wordpress.com/2017/12/11172124-5801-4199-afd6-20b93186a0c3.jpeg?w=2000'/> 
            </div>
            {/* <p>Actividades</p> */}
        </div>

    </main>
}

export default Login
