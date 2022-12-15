import log from '../utils/coolog'
import Context from './Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    return <header className='h-full w-full pr-3 pl-3 mb-3'>
        <div className='flex justify-between w-full h-full'>
            <div className='flex gap-10 ml-11'>
            <div className='font-bold text-7xl rotate-90  text-sky-800' >A</div>
                <h1 className='text-5xl text-sky-800 font-semibold'>genda </h1>
                <div className='font-bold text-7xl rotate-90  text-sky-800' >T</div>
            </div>
            <div className='flex flex-row gap-6'>
                <div >
                    <h4 className=' p-3 text-3xl  text-sky-800 font-semibold'>Bienvenido <span className='text-sky-600 '>{userName}</span></h4>
                </div>
                <button onClick={logout} className='text-center my-3 px-6 rounded-sm font-medium border-2 border-cyan-900 hover:text-white text-cyan-900 hover:bg-cyan-900 '>Salir</button>
            </div>

            {/* <div className='flex gap-12 items-center'>
                <div >
                    <Link to="/register" className='font-medium py-3 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md'>Registrarse</Link>
                </div>
                <div>
                    <Link to='/login' className='font-medium py-3 px-9 bg-green-600 text-white hover:bg-gray-700 rounded-md'>Entrar</Link>
                </div>
            </div> */}
        </div>
    </header>
}