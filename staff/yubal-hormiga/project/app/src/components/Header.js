import log from '../utils/coolog'
import Context from './Context'
import { useContext } from 'react'
export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    return <header className='h-full w-full pr-3 pl-3 mb-3'>
        <div className='md:flex md:justify-between justify-center w-full h-full'>
            <div className='flex gap-10 ml-11 '>
                <div className='font-bold text-7xl -rotate-45  text-[#023047]' >A</div>
                <h1 className='text-6xl text-[#ffb703] font-semibold'>genda</h1>
                <div className='font-bold text-7xl rotate-45  text-[#023047]' >T</div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-28'>
                <div >
                    <h4 className='text-center p-3 text-3xl  text-[#ffb703] font-semibold'>Bienvenido <span className='text-[#023047] '>{userName}</span></h4>
                </div>
                <button onClick={logout} className='text-center my-3 md:px-9 py-2 md:p-0 rounded-lg  font-bold  bg-[#ffb703] hover:text-[#ffb703] text-[#023047]  hover:bg-[#023047] '>Salir</button>
            </div>
        </div>
    </header>
}