import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext } from 'react'

export default function Header({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    const switchMode = () => document.querySelector('html').classList.toggle('dark')

    return <header className="fixed bg-[white] w-full h-[2rem] flex justify-between items-center gap-2 bg-green-400 dark:bg-black text-black dark:text-white">
        <p className='font-bold text-white mx-1.5'>{userName}</p>
        <div>
            <button onClick={logout}><AiOutlineLogout /></button>
            <button onClick={switchMode}><IoInvertModeOutline /></button>
        </div>
    </header>
}