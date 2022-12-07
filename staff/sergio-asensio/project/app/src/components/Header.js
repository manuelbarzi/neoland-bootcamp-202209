import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext } from 'react'
import logo from '../img/logo.jpg'

export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    const switchMode = () => document.querySelector('html').classList.toggle('dark')
    // className='h-screen'
    return <main >
    <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
    <div>
        <img src={logo} className='w-20 h-20'/>
    </div>
    <div>
        <h1>Trepadores Cavernicolas</h1>
    </div>
    <div>
        <p>{userName}</p>    
    </div>
    <div>
        <button onClick={logout}><AiOutlineLogout /></button>
        <button onClick={switchMode}><IoInvertModeOutline /></button>
        </div> 
    </header>
    </main>
}

// <header className='h-1/6 top-0 flex justify-around items-center bg-teal-600	'>
// <div>
//     <img src='"C:\Users\sergi\Desktop\Screenshot_20221203_111930.jpg"'/>
// </div>
// <div>
//     <h1>Trepadores Cavernicolas</h1>
// </div>
// <div>
//     <button onClick={toLogin} className="p-2 m-2 border rounded-xl">Login</button>
//     <button onClick={toRegister}className="p-2 border rounded-xl">Register</button>
// </div>
// </header>