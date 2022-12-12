import log from '../utils/coolog'
import Context from './Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    return <header className='h-full w-full pr-3 pl-3 '>
        <div className='flex  w-full h-full justify-between '>
            <div className=''>
                <h1 className='text-4xl  text-green-600 font-semibold'>Soy Mayor <spam className='uppercase font-black text-5xl'>no</spam> Idiota</h1>
            </div>
            <h4 className=' p-3 text-4xl  text-gray-700 font-semibold'>Bienvenido {userName}</h4>

            <div className='flex gap-12 items-center'>
                <div >
                    <Link to="/register" className='font-medium py-3 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md'>Registrarse</Link>
                </div>
                <div>
                    <Link to='/login' className='font-medium py-3 px-9 bg-green-600 text-white hover:bg-gray-700 rounded-md'>Entrar</Link>
                </div>
            </div>
        </div>
        <div className='text-center'>
            <button onClick={logout} className=' rounded-full font-medium bg-gray-700 hover:bg-green-600 text-white hover: p-3 '>Salir</button>
        </div>
    </header>
}