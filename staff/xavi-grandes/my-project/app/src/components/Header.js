import log from '../utils/coolog'
import { AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext, useState } from 'react'
import Menu from './Menu'

export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    const [show, setShow] = useState('close')
    const showMenu = event => {
        event.preventDefault()
    
        setShow(show === 'close'? 'menu': 'close')
    }

    // dark mode
    const switchMode = () => document.querySelector('html').classList.toggle('dark')


    return <header className="fixed bg-[white] w-full h-[3rem] top-0 flex items-center gap-8 bg-gray-100">
        
        <button className='p-2 ml-1 flex items-center cursor-pointer' onClick={showMenu}><AiOutlineMenu className='h-[20px] w-[20px]'/></button>
        <h1>Mis listas</h1>

        { show === 'menu' && <Menu />}

        {/* TODO: este variable estará dentro del menú. */}
        <p>{userName}</p>

        {/* TODO: este botón estará en la página del perfil. */}
        <button onClick={logout}><AiOutlineLogout /></button>

        {/* TODO: este botón estará en la página de perfil. */}
        <button onClick={switchMode}><IoInvertModeOutline /></button>
    </header>
}