import log from '../utils/coolog'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoInvertModeOutline } from 'react-icons/io5'
import Context from './Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'


export default function ({ userName }) {
    log.info('Header -> render')

    const { logout } = useContext(Context)

    const switchMode = () => document.querySelector('html').classList.toggle('dark')

    const navigate = useNavigate()

    const back = ()=>  navigate('/home')

    return <header className="fixed bg-[white] w-full h-[2rem] top-0 flex justify-center items-center gap-2 bg-white dark:bg-black text-black dark:text-white">
        <button onClick={back}><RiArrowGoBackFill /></button>
        
        <p>{userName}</p>

        <button onClick={logout}><AiOutlineLogout /></button>

        <button onClick={switchMode}><IoInvertModeOutline /></button>
    </header>
}